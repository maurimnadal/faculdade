import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";

import { notices as initialNotices } from "../data/notices";
import { Notice } from "../types/models";

type NoticeInput = {
  titulo: string;
  mensagem: string;
  data: string;
};

type NoticesContextValue = {
  notices: Notice[];
  addNotice: (input: NoticeInput) => void;
  deleteNotice: (noticeId: string) => void;
};

const NOTICES_STORAGE_KEY = "@cardapio_app:notices";
const NoticesContext = createContext<NoticesContextValue | null>(null);

export function NoticesProvider({ children }: PropsWithChildren) {
  const [notices, setNotices] = useState<Notice[]>(initialNotices);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    async function loadNotices() {
      try {
        const storedNotices = await AsyncStorage.getItem(NOTICES_STORAGE_KEY);
        const parsedNotices = parseNotices(storedNotices);

        if (parsedNotices) {
          setNotices(parsedNotices);
        }
      } finally {
        setHydrated(true);
      }
    }

    loadNotices();
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    AsyncStorage.setItem(NOTICES_STORAGE_KEY, JSON.stringify(notices));
  }, [hydrated, notices]);

  const value = useMemo<NoticesContextValue>(
    () => ({
      notices,
      addNotice: (input) => {
        const newNotice: Notice = {
          id: `aviso-${Date.now()}`,
          ...input
        };

        setNotices((currentNotices) => [newNotice, ...currentNotices]);
      },
      deleteNotice: (noticeId) => {
        setNotices((currentNotices) => currentNotices.filter((notice) => notice.id !== noticeId));
      }
    }),
    [notices]
  );

  return <NoticesContext.Provider value={value}>{children}</NoticesContext.Provider>;
}

function parseNotices(value: string | null) {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value);

    if (Array.isArray(parsed)) {
      return parsed.filter(isNotice);
    }
  } catch {
    return null;
  }

  return null;
}

function isNotice(value: unknown): value is Notice {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Notice;

  return (
    typeof candidate.id === "string" &&
    typeof candidate.titulo === "string" &&
    typeof candidate.mensagem === "string" &&
    typeof candidate.data === "string"
  );
}

export function useNotices() {
  const context = useContext(NoticesContext);

  if (!context) {
    throw new Error("useNotices deve ser usado dentro de NoticesProvider.");
  }

  return context;
}
