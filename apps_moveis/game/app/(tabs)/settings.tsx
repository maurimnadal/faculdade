import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useGame from "../context/gameContext";

const COLORS = [
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "black"
];

export default function Settings() {
  const { xColor, oColor, setXColor, setOColor } = useGame();

  function ColorPicker({
    selectedColor,
    onSelect
  }: {
    selectedColor: string;
    onSelect: (color: string) => void;
  }) {
    return (
      <View style={styles.row}>
        {COLORS.map((color) => (
          <TouchableOpacity
            key={color}
            onPress={() => onSelect(color)}
            style={[
              styles.colorBox,
              { backgroundColor: color },
              selectedColor === color && styles.selected
            ]}
          />
        ))}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cor do X</Text>
      <ColorPicker selectedColor={xColor} onSelect={setXColor} />

      <Text style={styles.title}>Cor do O</Text>
      <ColorPicker selectedColor={oColor} onSelect={setOColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  colorBox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 5
  },
  selected: {
    borderWidth: 3,
    borderColor: "#000"
  }
});