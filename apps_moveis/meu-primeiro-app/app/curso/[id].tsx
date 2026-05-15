import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
export default function DetalhesCurso() {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Exibindo detalhes do curso ID: {id}</Text>
    </View>
  );
}
