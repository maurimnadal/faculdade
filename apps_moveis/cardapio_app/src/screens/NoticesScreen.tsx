import { useState } from "react";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PrimaryButton } from "../components/PrimaryButton";
import { ScreenHeader } from "../components/ScreenHeader";
import { TextField } from "../components/TextField";
import { useAuth } from "../contexts/AuthContext";
import { useNotices } from "../contexts/NoticesContext";
import { colors, radii, spacing } from "../theme";

export function NoticesScreen() {
  const { user } = useAuth();
  const { addNotice, deleteNotice, notices } = useNotices();
  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [error, setError] = useState("");
  const isServer = user?.tipo === "servidor";

  function handleAddNotice() {
    if (!titulo.trim() || !mensagem.trim()) {
      setError("Informe título e mensagem do aviso.");
      return;
    }

    addNotice({
      titulo: titulo.trim(),
      mensagem: mensagem.trim(),
      data: new Date().toISOString().slice(0, 10)
    });
    setTitulo("");
    setMensagem("");
    setError("");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <ScreenHeader
          title="Avisos"
          subtitle={
            isServer
              ? "Inclua e exclua comunicados do refeitório."
              : "Comunicados publicados pelo refeitório."
          }
        />

        {isServer ? (
          <View style={styles.formCard}>
            <TextField
              label="Título"
              onChangeText={setTitulo}
              placeholder="Título do aviso"
              value={titulo}
            />
            <TextField
              label="Mensagem"
              multiline
              onChangeText={setMensagem}
              placeholder="Mensagem para os usuários"
              value={mensagem}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <PrimaryButton onPress={handleAddNotice} title="Incluir aviso" />
          </View>
        ) : null}

        <FlatList
          data={notices}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.list}
          ListEmptyComponent={<Text style={styles.empty}>Nenhum aviso publicado.</Text>}
          renderItem={({ item }) => (
            <View style={styles.noticeCard}>
              <View style={styles.noticeContent}>
                <Text style={styles.noticeTitle}>{item.titulo}</Text>
                <Text style={styles.noticeDate}>{item.data}</Text>
                <Text style={styles.noticeMessage}>{item.mensagem}</Text>
              </View>
              {isServer ? (
                <Pressable
                  accessibilityRole="button"
                  onPress={() => deleteNotice(item.id)}
                  style={styles.deleteButton}
                >
                  <Text style={styles.deleteText}>Excluir</Text>
                </Pressable>
              ) : null}
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
  error: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: "700"
  },
  list: {
    gap: spacing.md
  },
  empty: {
    color: colors.muted,
    fontSize: 16
  },
  noticeCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.sm,
    borderWidth: 1,
    gap: spacing.md,
    padding: spacing.md
  },
  noticeContent: {
    gap: spacing.xs
  },
  noticeTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "800"
  },
  noticeDate: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "700"
  },
  noticeMessage: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 21
  },
  deleteButton: {
    alignSelf: "flex-start",
    backgroundColor: "#fde8e8",
    borderRadius: radii.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  deleteText: {
    color: colors.primaryDark,
    fontSize: 14,
    fontWeight: "800"
  }
});
