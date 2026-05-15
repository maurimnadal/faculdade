import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function DetalhesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Curso</Text>
      <Text style={styles.descricao}>
        Este é o curso de Análise e Desenvolvimento de Sistemas do IFRS Campus
        Bento Gonçalves.
      </Text>
      <Link href="/" style={styles.linkVoltar}>
        Voltar para o Início
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  descricao: { fontSize: 16, textAlign: "center", color: "#666" },
  linkVoltar: { marginTop: 20, color: "#005a32", fontWeight: "bold" },
});
    