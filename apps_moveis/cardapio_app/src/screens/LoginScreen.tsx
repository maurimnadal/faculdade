import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PrimaryButton } from "../components/PrimaryButton";
import { TextField } from "../components/TextField";
import { useAuth } from "../contexts/AuthContext";
import { colors, radii, spacing } from "../theme";
import { RootStackParamList } from "../types/navigation";

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

export function LoginScreen({ navigation }: LoginScreenProps) {
  const { signIn } = useAuth();
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    const success = signIn(cpf, senha);

    if (!success) {
      setError("CPF ou senha inválidos. Teste 11122233344/123456 ou 55566677788/123456.");
      return;
    }

    setError("");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <View style={styles.brand}>
          <Text style={styles.brandMark}>RU</Text>
          <Text style={styles.title}>Cardápio Institucional - IFRS</Text>
          <Text style={styles.subtitle}>
            Acesse o cardápio semanal do refeitório com seu perfil acadêmico.
          </Text>
        </View>

        <View style={styles.form}>
          <TextField
            keyboardType="number-pad"
            label="CPF"
            onChangeText={setCpf}
            placeholder="Digite seu CPF"
            value={cpf}
          />
          <TextField
            label="Senha"
            onChangeText={setSenha}
            placeholder="Digite sua senha"
            secureTextEntry
            value={senha}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <PrimaryButton
            disabled={!cpf.trim() || !senha}
            onPress={handleLogin}
            title="Entrar"
          />
          <PrimaryButton
            onPress={() => navigation.navigate("Register")}
            title="Cadastrar-se"
            variant="secondary"
          />
        </View>
      </KeyboardAvoidingView>
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
    justifyContent: "center",
    padding: spacing.lg
  },
  brand: {
    gap: spacing.sm,
    marginBottom: spacing.xl
  },
  brandMark: {
    alignSelf: "flex-start",
    backgroundColor: colors.primary,
    borderRadius: radii.sm,
    color: colors.surface,
    fontSize: 20,
    fontWeight: "900",
    overflow: "hidden",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "900"
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 23
  },
  form: {
    gap: spacing.md
  },
  error: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: "700"
  }
});
