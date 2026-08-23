import { useCallback, useMemo, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { FlatList, Share, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MenuCard } from "../components/MenuCard";
import { ScreenHeader } from "../components/ScreenHeader";
import { useFavorites } from "../contexts/FavoritesContext";
import { useMenus } from "../contexts/MenuContext";
import { colors, spacing } from "../theme";
import { formatShareText, getCurrentWeekMenus, isToday } from "../utils/menu";

export function FavoritesScreen() {
  const [referenceDate, setReferenceDate] = useState(() => new Date());
  const { favoriteIds, isFavorite, removeFavorite } = useFavorites();
  const { menus } = useMenus();
  const favoriteMenus = useMemo(
    () => getCurrentWeekMenus(menus, referenceDate).filter((menu) => favoriteIds.includes(menu.id)),
    [favoriteIds, menus, referenceDate]
  );

  useFocusEffect(
    useCallback(() => {
      setReferenceDate(new Date());
    }, [])
  );

  async function handleShare(menuId: string) {
    const menu = favoriteMenus.find((item) => item.id === menuId);

    if (!menu) {
      return;
    }

    await Share.share({ message: formatShareText(menu) });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScreenHeader
          title="Favoritos"
          subtitle="Cardápios marcados ficam vinculados ao usuário logado."
        />

        {favoriteMenus.length > 0 ? (
          <FlatList
            contentContainerStyle={styles.listContent}
            data={favoriteMenus}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MenuCard
                favorite={isFavorite(item.id)}
                highlighted={isToday(item, referenceDate)}
                menu={item}
                onShare={() => handleShare(item.id)}
                onToggleFavorite={() => removeFavorite(item.id)}
              />
            )}
          />
        ) : (
          <Text style={styles.emptyText}>
            Você ainda não marcou nenhum cardápio da semana como favorito.
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg
  },
  listContent: {
    paddingBottom: spacing.lg
  },
  emptyText: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 22
  }
});
