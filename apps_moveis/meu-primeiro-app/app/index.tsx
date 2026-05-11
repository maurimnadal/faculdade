import React, { useState } from "react"; // Importamos o Hook
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Link } from "expo-router";

export default function ContadorScreen() {
  const disciplinas = [
    { id: "ads", nome: "Análise e Desenvolvimento de Sistemas" },
    { id: "bd", nome: "Banco de Dados" },
    { id: "redes", nome: "Redes de Computadores" },
  ];

  const [alunos, setAlunos] = useState(0);

  function adicionarAluno() {
    setAlunos(alunos + 1);
  }

  function removerAluno() {
    if (alunos > 0) {
      setAlunos(alunos - 1);
    }
  }

  const [nomeProfessor, setNomeProfessor] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o nome do professor"
        onChangeText={(texto) => setNomeProfessor(texto)}
        style={styles.input}
      />
      <Text style={styles.label}>Alunos na sala:</Text>
      <Text style={styles.contador}>{alunos}</Text>
      <Text style={styles.nomeProfessor}>Professor: {nomeProfessor}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.botaoRemover} onPress={removerAluno}>
          <Text style={styles.textoBotao}>- Remover</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarAluno}
        >
          <Text style={styles.textoBotao}>+ Adicionar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.botaoReset} onPress={() => setAlunos(0)}>
        <Text style={styles.textoReset}>Zerar Contador</Text>
      </TouchableOpacity>

      <Link href="/detalhes" asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Ver Detalhes</Text>
        </TouchableOpacity>
      </Link>

      {disciplinas.map((disciplina) => (
        <Link href={{ pathname: "/curso/[id]", params: { id: disciplina.id } }} key={disciplina.id}>
          <Text style={styles.textoLink}>{disciplina.nome}</Text>
        </Link>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    width: "80%",
    marginBottom: 30,
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    color: "#666",
  },
  contador: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#005a32",
    marginVertical: 20,
  },
  nomeProfessor: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  botaoAdicionar: {
    backgroundColor: "#005a32",
    padding: 15,
    borderRadius: 8,
  },
  botaoRemover: {
    backgroundColor: "#a30000",
    padding: 15,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  botaoReset: {
    marginTop: 30,
  },
  textoReset: {
    color: "#666",
    textDecorationLine: "underline",
  },
  textoLink: {
    color: "#005a32",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#005a32",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
});
