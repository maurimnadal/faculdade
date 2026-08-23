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

export function MenuScreen() {
  const [referenceDate, setReferenceDate] = useState(() => new Date());
  const { isFavorite, toggleFavorite } = useFavorites();
  const { menus } = useMenus();
  const currentWeekMenus = useMemo(
    () => getCurrentWeekMenus(menus, referenceDate),
    [menus, referenceDate]
  );

  useFocusEffect(
    useCallback(() => {
      setReferenceDate(new Date());
    }, [])
  );

  async function handleShare(menuId: string) {
    const menu = currentWeekMenus.find((item) => item.id === menuId);

    if (!menu) {
      return;
    }

    await Share.share({ message: formatShareText(menu) });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScreenHeader
          title="Cardápio"
          subtitle="Refeições filtradas automaticamente pela semana atual."
        />

        {currentWeekMenus.length > 0 ? (
          <FlatList
            contentContainerStyle={styles.listContent}
            data={currentWeekMenus}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MenuCard
                favorite={isFavorite(item.id)}
                highlighted={isToday(item, referenceDate)}
                menu={item}
                onShare={() => handleShare(item.id)}
                onToggleFavorite={() => toggleFavorite(item.id)}
              />
            )}
          />
        ) : (
          <Text style={styles.emptyText}>Nenhum cardápio cadastrado para a semana atual.</Text>
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
