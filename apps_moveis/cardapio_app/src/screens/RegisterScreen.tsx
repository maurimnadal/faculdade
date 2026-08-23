import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PrimaryButton } from "../components/PrimaryButton";
import { ScreenHeader } from "../components/ScreenHeader";
import { TextField } from "../components/TextField";
import { useAuth } from "../contexts/AuthContext";
import { colors, radii, spacing } from "../theme";
import { UserType } from "../types/models";
import { RootStackParamList } from "../types/navigation";

type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, "Register">;

export function RegisterScreen({ navigation }: RegisterScreenProps) {
  const { register } = useAuth();
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState<UserType>("aluno");
  const [error, setError] = useState("");

  function handleRegister() {
    const result = register({ nome, matricula, email, cpf, senha, tipo });

    if (!result.ok) {
      setError(result.message ?? "Não foi possível concluir o cadastro.");
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.keyboard}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <ScreenHeader
            title="Cadastro"
            subtitle="Crie um acesso com perfil de aluno ou servidor."
          />

          <View style={styles.form}>
            <TextField label="Nome" onChangeText={setNome} placeholder="Nome completo" value={nome} />
            <TextField
              label="Matrícula"
              onChangeText={setMatricula}
              placeholder="Número de matrícula"
              value={matricula}
            />
            <TextField
              keyboardType="email-address"
              label="E-mail"
              onChangeText={setEmail}
              placeholder="email@instituicao.edu"
              value={email}
            />
            <TextField
              keyboardType="number-pad"
              label="CPF"
              onChangeText={setCpf}
              placeholder="CPF do usuário"
              value={cpf}
            />
            <TextField
              label="Senha"
              onChangeText={setSenha}
              placeholder="Senha"
              secureTextEntry
              value={senha}
            />

            <Text style={styles.label}>Tipo de usuário</Text>
            <View style={styles.segmented}>
              {(["aluno", "servidor"] as UserType[]).map((option) => (
                <Text
                  key={option}
                  onPress={() => setTipo(option)}
                  style={[styles.segment, tipo === option && styles.segmentActive]}
                >
                  {option}
                </Text>
              ))}
            </View>

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <PrimaryButton onPress={handleRegister} title="Cadastrar e entrar" />
            <PrimaryButton
              onPress={() => navigation.goBack()}
              title="Voltar para entrada"
              variant="secondary"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  },
  keyboard: {
    flex: 1
  },
  container: {
    padding: spacing.lg
  },
  form: {
    gap: spacing.md
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "700"
  },
  segmented: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.sm,
    borderWidth: 1,
    flexDirection: "row",
    overflow: "hidden"
  },
  segment: {
    color: colors.muted,
    flex: 1,
    fontSize: 15,
    fontWeight: "800",
    padding: spacing.md,
    textAlign: "center",
    textTransform: "capitalize"
  },
  segmentActive: {
    backgroundColor: colors.primary,
    color: colors.surface
  },
  error: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: "700"
  }
});
