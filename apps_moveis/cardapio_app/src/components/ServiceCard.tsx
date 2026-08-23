import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radii, spacing } from "../theme";

type ServiceCardProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  description: string;
  disabled?: boolean;
  onPress?: () => void;
};

export function ServiceCard({ icon, title, description, disabled = false, onPress }: ServiceCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed
      ]}
    >
      <View style={[styles.iconBox, disabled && styles.disabledIcon]}>
        <MaterialCommunityIcons
          name={icon}
          color={disabled ? colors.disabled : colors.primary}
          size={26}
        />
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, disabled && styles.disabledText]}>{title}</Text>
        <Text style={[styles.description, disabled && styles.disabledText]}>{description}</Text>
      </View>
      <MaterialCommunityIcons
        name={disabled ? "lock-outline" : "chevron-right"}
        color={disabled ? colors.disabled : colors.primary}
        size={24}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.sm,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing.md,
    padding: spacing.md
  },
  disabled: {
    opacity: 0.72
  },
  pressed: {
    transform: [{ scale: 0.99 }]
  },
  iconBox: {
    alignItems: "center",
    backgroundColor: colors.primarySoft,
    borderRadius: radii.sm,
    height: 48,
    justifyContent: "center",
    width: 48
  },
  disabledIcon: {
    backgroundColor: "#eef3f1"
  },
  content: {
    flex: 1,
    gap: spacing.xs
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800"
  },
  description: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20
  },
  disabledText: {
    color: colors.disabled
  }
});
