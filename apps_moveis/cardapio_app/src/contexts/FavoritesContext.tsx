import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";

import { useAuth } from "./AuthContext";

const STORAGE_KEY = "@cardapio_app:favorites";

type FavoritesContextValue = {
  favoriteIds: string[];
  isFavorite: (menuId: string) => boolean;
  toggleFavorite: (menuId: string) => Promise<void>;
  removeFavorite: (menuId: string) => Promise<void>;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: PropsWithChildren) {
  const { user } = useAuth();
  const [favoritesByUser, setFavoritesByUser] = useState<Record<string, string[]>>({});
  const favoriteIds = user ? favoritesByUser[user.id] ?? [] : [];

  useEffect(() => {
    async function loadFavorites() {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);

      if (stored) {
        try {
          const parsed = JSON.parse(stored);

          if (Array.isArray(parsed)) {
            setFavoritesByUser({});
            return;
          }

          if (isFavoritesByUser(parsed)) {
            setFavoritesByUser(parsed);
          }
        } catch {
          await AsyncStorage.removeItem(STORAGE_KEY);
          setFavoritesByUser({});
        }
      }
    }

    loadFavorites();
  }, []);

  const persist = async (nextFavoritesByUser: Record<string, string[]>) => {
    setFavoritesByUser(nextFavoritesByUser);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(nextFavoritesByUser));
  };

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favoriteIds,
      isFavorite: (menuId) => favoriteIds.includes(menuId),
      toggleFavorite: async (menuId) => {
        if (!user) {
          return;
        }

        const nextFavorites = favoriteIds.includes(menuId)
          ? favoriteIds.filter((id) => id !== menuId)
          : [...favoriteIds, menuId];

        await persist({
          ...favoritesByUser,
          [user.id]: nextFavorites
        });
      },
      removeFavorite: async (menuId) => {
        if (!user) {
          return;
        }

        await persist({
          ...favoritesByUser,
          [user.id]: favoriteIds.filter((id) => id !== menuId)
        });
      }
    }),
    [favoriteIds, favoritesByUser, user]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

function isFavoritesByUser(value: unknown): value is Record<string, string[]> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  return Object.values(value).every(
    (favoriteIds) =>
      Array.isArray(favoriteIds) && favoriteIds.every((favoriteId) => typeof favoriteId === "string")
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites deve ser usado dentro de FavoritesProvider.");
  }

  return context;
}
