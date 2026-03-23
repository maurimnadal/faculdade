import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { useGame } from "../context/gameContext";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const { xColor, oColor } = useGame();

  function handlePress(index: number) {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";

    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function getColor(value: string | null) {
    if (value === "X") return xColor;
    if (value === "O") return oColor;
    return "black";
  }

  return (
    <View style={styles.container}>
      {board.map((item, i) => (
        <TouchableOpacity
          key={i}
          style={styles.cell}
          onPress={() => handlePress(i)}
        >
          <Text style={[styles.text, { color: getColor(item) }]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
    alignSelf: "center",
    marginTop: 100
  },
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 32
  }
});