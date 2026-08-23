import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

import { colors, radii, spacing } from "../theme";

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  style?: ViewStyle;
};

export function PrimaryButton({
  title,
  onPress,
  disabled = false,
  variant = "primary",
  style
}: PrimaryButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style
      ]}
    >
      <Text style={[styles.text, variant !== "primary" && styles.secondaryText]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: radii.sm,
    minHeight: 48,
    justifyContent: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  primary: {
    backgroundColor: colors.primary
  },
  secondary: {
    backgroundColor: colors.primarySoft
  },
  danger: {
    backgroundColor: "#fde8e8"
  },
  disabled: {
    backgroundColor: colors.disabled
  },
  pressed: {
    opacity: 0.82
  },
  text: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: "700"
  },
  secondaryText: {
    color: colors.primaryDark
  }
});
