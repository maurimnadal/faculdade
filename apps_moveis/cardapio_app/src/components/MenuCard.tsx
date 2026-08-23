import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radii, spacing } from "../theme";
import { Menu } from "../types/models";
import { formatMenuDate } from "../utils/menu";

type MenuCardProps = {
  menu: Menu;
  highlighted?: boolean;
  favorite?: boolean;
  onToggleFavorite: () => void;
  onShare: () => void;
};

export function MenuCard({
  menu,
  highlighted = false,
  favorite = false,
  onToggleFavorite,
  onShare
}: MenuCardProps) {
  return (
    <View style={[styles.card, highlighted && styles.highlighted]}>
      <View style={styles.header}>
        <View style={styles.titleGroup}>
          <Text style={styles.meal}>{menu.tipoRefeicao}</Text>
          <Text style={styles.date}>{formatMenuDate(menu.data)}</Text>
        </View>
        {highlighted ? (
          <View style={styles.todayBadge}>
            <Text style={styles.todayText}>Hoje</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.items}>
        {menu.itens.map((item) => (
          <View key={item} style={styles.itemRow}>
            <View style={styles.itemDot} />
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.actions}>
        <Pressable accessibilityRole="button" onPress={onToggleFavorite} style={styles.actionButton}>
          <MaterialCommunityIcons
            name={favorite ? "heart" : "heart-outline"}
            color={favorite ? colors.danger : colors.primary}
            size={20}
          />
          <Text style={styles.actionText}>{favorite ? "Favorito" : "Favoritar"}</Text>
        </Pressable>

        <Pressable accessibilityRole="button" onPress={onShare} style={styles.actionButton}>
          <MaterialCommunityIcons name="share-variant" color={colors.primary} size={20} />
          <Text style={styles.actionText}>Compartilhar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.sm,
    borderWidth: 1,
    gap: spacing.md,
    padding: spacing.md
  },
  highlighted: {
    borderColor: colors.accent,
    borderWidth: 2,
    shadowColor: colors.accent,
    shadowOpacity: 0.16,
    shadowRadius: 8
  },
  header: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: spacing.sm,
    justifyContent: "space-between"
  },
  titleGroup: {
    flex: 1,
    gap: spacing.xs
  },
  meal: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800"
  },
  date: {
    color: colors.muted,
    fontSize: 14,
    textTransform: "capitalize"
  },
  todayBadge: {
    backgroundColor: colors.accent,
    borderRadius: radii.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs
  },
  todayText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: "800"
  },
  items: {
    gap: spacing.sm
  },
  itemRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.sm
  },
  itemDot: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    height: 8,
    width: 8
  },
  itemText: {
    color: colors.text,
    flex: 1,
    fontSize: 15,
    lineHeight: 21
  },
  actions: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    paddingTop: spacing.md
  },
  actionButton: {
    alignItems: "center",
    backgroundColor: colors.primarySoft,
    borderRadius: radii.sm,
    flexDirection: "row",
    gap: spacing.xs,
    minHeight: 40,
    paddingHorizontal: spacing.sm
  },
  actionText: {
    color: colors.primaryDark,
    fontSize: 14,
    fontWeight: "700"
  }
});
