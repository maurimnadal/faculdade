import { useMemo, useState } from "react";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PrimaryButton } from "../components/PrimaryButton";
import { ScreenHeader } from "../components/ScreenHeader";
import { TextField } from "../components/TextField";
import { useAuth } from "../contexts/AuthContext";
import { useMenus } from "../contexts/MenuContext";
import { colors, radii, spacing } from "../theme";
import { MealType, Menu } from "../types/models";
import { formatMenuDate } from "../utils/menu";

const mealTypes: MealType[] = ["Café da Manhã", "Almoço", "Jantar", "Lanche"];

function splitItems(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function ManagementScreen() {
  const { user } = useAuth();
  const { addMenu, deleteMenu, menus, updateMenu } = useMenus();
  const [selectedMenuId, setSelectedMenuId] = useState<string | null>(null);
  const [data, setData] = useState("");
  const [tipoRefeicao, setTipoRefeicao] = useState<MealType>("Almoço");
  const [itens, setItens] = useState("");
  const [error, setError] = useState("");

  const sortedMenus = useMemo(
    () =>
      [...menus].sort((a, b) => {
        const dateComparison = a.data.localeCompare(b.data);

        if (dateComparison !== 0) {
          return dateComparison;
        }

        return a.tipoRefeicao.localeCompare(b.tipoRefeicao);
      }),
    [menus]
  );

  const isServer = user?.tipo === "servidor";

  function clearForm() {
    setSelectedMenuId(null);
    setData("");
    setTipoRefeicao("Almoço");
    setItens("");
    setError("");
  }

  function selectMenu(menu: Menu) {
    setSelectedMenuId(menu.id);
    setData(menu.data);
    setTipoRefeicao(menu.tipoRefeicao);
    setItens(menu.itens.join(", "));
    setError("");
  }

  function validateForm() {
    const parsedItems = splitItems(itens);

    if (!data.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(data.trim())) {
      setError("Informe a data no formato YYYY-MM-DD.");
      return null;
    }

    if (parsedItems.length === 0) {
      setError("Informe ao menos um item do cardápio, separado por vírgula.");
      return null;
    }

    setError("");
    return {
      data: data.trim(),
      tipoRefeicao,
      itens: parsedItems
    };
  }

  function handleSave() {
    const payload = validateForm();

    if (!payload) {
      return;
    }

    if (selectedMenuId) {
      updateMenu(selectedMenuId, payload);
    } else {
      addMenu(payload);
    }

    clearForm();
  }

  function handleDelete(menuId: string) {
    deleteMenu(menuId);

    if (selectedMenuId === menuId) {
      clearForm();
    }
  }

  if (!isServer) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ScreenHeader
            title="Gestão"
            subtitle="Esta área é exclusiva para usuários servidores."
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <ScreenHeader
          title="Gestão"
          subtitle="Inclua, mantenha e exclua cardápios do refeitório."
        />

        <View style={styles.formCard}>
          <TextField
            label="Data"
            onChangeText={setData}
            placeholder="YYYY-MM-DD"
            value={data}
          />

          <Text style={styles.label}>Tipo de refeição</Text>
          <View style={styles.typeGrid}>
            {mealTypes.map((mealType) => (
              <Pressable
                accessibilityRole="button"
                key={mealType}
                onPress={() => setTipoRefeicao(mealType)}
                style={[styles.typeButton, tipoRefeicao === mealType && styles.typeButtonActive]}
              >
                <Text
                  style={[
                    styles.typeButtonText,
                    tipoRefeicao === mealType && styles.typeButtonTextActive
                  ]}
                >
                  {mealType}
                </Text>
              </Pressable>
            ))}
          </View>

          <TextField
            label="Itens"
            multiline
            onChangeText={setItens}
            placeholder="Arroz, Feijão, Salada"
            value={itens}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <View style={styles.actions}>
            <PrimaryButton
              onPress={handleSave}
              title={selectedMenuId ? "Salvar alterações" : "Incluir cardápio"}
              style={styles.actionButton}
            />
            <PrimaryButton
              onPress={clearForm}
              title="Limpar"
              variant="secondary"
              style={styles.actionButton}
            />
          </View>
        </View>

        <FlatList
          data={sortedMenus}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.menuRow}>
              <View style={styles.menuRowContent}>
                <Text style={styles.menuTitle}>{item.tipoRefeicao}</Text>
                <Text style={styles.menuDate}>{formatMenuDate(item.data)}</Text>
                <Text style={styles.menuItems}>{item.itens.join(", ")}</Text>
              </View>
              <View style={styles.rowActions}>
                <PrimaryButton onPress={() => selectMenu(item)} title="Editar" variant="secondary" />
                <PrimaryButton onPress={() => handleDelete(item.id)} title="Excluir" variant="danger" />
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  },
  container: {
    padding: spacing.lg
  },
  formCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.sm,
    borderWidth: 1,
    gap: spacing.md,
    marginBottom: spacing.lg,
    padding: spacing.md
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "700"
  },
  typeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  typeButton: {
    backgroundColor: colors.primarySoft,
    borderRadius: radii.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  typeButtonActive: {
    backgroundColor: colors.primary
  },
  typeButtonText: {
    color: colors.primaryDark,
    fontWeight: "800"
  },
  typeButtonTextActive: {
    color: colors.surface
  },
  error: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: "700"
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  actionButton: {
    flex: 1,
    minWidth: 150
  },
  list: {
    gap: spacing.md
  },
  menuRow: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.sm,
    borderWidth: 1,
    gap: spacing.md,
    padding: spacing.md
  },
  menuRowContent: {
    gap: spacing.xs
  },
  menuTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "800"
  },
  menuDate: {
    color: colors.muted,
    fontSize: 14,
    textTransform: "capitalize"
  },
  menuItems: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 20
  },
  rowActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  }
});
