import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PrimaryButton } from "../components/PrimaryButton";
import { ScreenHeader } from "../components/ScreenHeader";
import { useAuth } from "../contexts/AuthContext";
import { colors, radii, spacing } from "../theme";

export function ProfileScreen() {
  const { signOut, user } = useAuth();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ScreenHeader title="Perfil" subtitle="Dados do usuário autenticado nesta sessão." />

        <View style={styles.card}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.value}>{user?.nome}</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>Matrícula</Text>
          <Text style={styles.value}>{user?.matricula}</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.emailValue}>{user?.email}</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>CPF</Text>
          <Text style={styles.value}>{user?.cpf}</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>Tipo de perfil</Text>
          <Text style={styles.value}>{user?.tipo}</Text>

          <Text style={styles.description}>
            {user?.tipo === "servidor"
              ? "Servidores visualizam a área reservada de gestão demonstrativa no dashboard."
              : "Alunos acessam consulta, favoritos e compartilhamento do cardápio."}
          </Text>
        </View>

        <PrimaryButton onPress={signOut} title="Sair" variant="danger" />
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
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.sm,
    borderWidth: 1,
    gap: spacing.sm,
    marginBottom: spacing.lg,
    padding: spacing.md
  },
  label: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase"
  },
  value: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "800",
    textTransform: "capitalize"
  },
  emailValue: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800"
  },
  divider: {
    backgroundColor: colors.border,
    height: 1,
    marginVertical: spacing.sm
  },
  description: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    marginTop: spacing.sm
  }
});
