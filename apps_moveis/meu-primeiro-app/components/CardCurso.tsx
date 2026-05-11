import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
interface CardProps {
  nome: string;
  coordenador: string;
  cargaHoraria: number;
  cor?: string;
}
export default function CardCurso({
  nome,
  coordenador,
  cargaHoraria,
  cor = "#005a32"
}: CardProps) {
  return (
    <TouchableOpacity style={[styles.card, { borderLeftColor: cor }]}>
      <Text style={styles.titulo}>{nome}</Text>
      <Text style={styles.info}>Coordenador: {coordenador}</Text>
      <Text style={styles.info}>Carga Horária: {cargaHoraria}h</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    width: "90%",
    borderLeftWidth: 5,
    borderLeftColor: "#005a32",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  info: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
