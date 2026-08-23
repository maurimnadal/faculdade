import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";

import { menus as initialMenus } from "../data/menus";
import { MealType, Menu } from "../types/models";

type MenuInput = {
  data: string;
  tipoRefeicao: MealType;
  itens: string[];
};

type MenuContextValue = {
  menus: Menu[];
  addMenu: (input: MenuInput) => void;
  updateMenu: (menuId: string, input: MenuInput) => void;
  deleteMenu: (menuId: string) => void;
};

const MENUS_STORAGE_KEY = "@cardapio_app:menus";
const MenuContext = createContext<MenuContextValue | null>(null);

export function MenuProvider({ children }: PropsWithChildren) {
  const [menus, setMenus] = useState<Menu[]>(initialMenus);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    async function loadMenus() {
      try {
        const storedMenus = await AsyncStorage.getItem(MENUS_STORAGE_KEY);
        const parsedMenus = parseMenus(storedMenus);

        if (parsedMenus) {
          setMenus(parsedMenus);
        }
      } finally {
        setHydrated(true);
      }
    }

    loadMenus();
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    AsyncStorage.setItem(MENUS_STORAGE_KEY, JSON.stringify(menus));
  }, [hydrated, menus]);

  const value = useMemo<MenuContextValue>(
    () => ({
      menus,
      addMenu: (input) => {
        const newMenu: Menu = {
          id: `menu-${Date.now()}`,
          ...input
        };

        setMenus((currentMenus) => [...currentMenus, newMenu]);
      },
      updateMenu: (menuId, input) => {
        setMenus((currentMenus) =>
          currentMenus.map((menu) => (menu.id === menuId ? { ...menu, ...input } : menu))
        );
      },
      deleteMenu: (menuId) => {
        setMenus((currentMenus) => currentMenus.filter((menu) => menu.id !== menuId));
      }
    }),
    [menus]
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

function parseMenus(value: string | null) {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value);

    if (Array.isArray(parsed)) {
      return parsed.filter(isMenu);
    }
  } catch {
    return null;
  }

  return null;
}

function isMenu(value: unknown): value is Menu {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Menu;

  return (
    typeof candidate.id === "string" &&
    typeof candidate.data === "string" &&
    typeof candidate.tipoRefeicao === "string" &&
    Array.isArray(candidate.itens) &&
    candidate.itens.every((item) => typeof item === "string")
  );
}

export function useMenus() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenus deve ser usado dentro de MenuProvider.");
  }

  return context;
}
