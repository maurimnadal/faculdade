import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handlePress(index) {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  return (
    <View style={styles.container}>
      {board.map((item, i) => (
        <TouchableOpacity key={i} style={styles.cell} onPress={() => handlePress(i)}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection:"row", flexWrap:"wrap", width:300, alignSelf:"center", marginTop:100 },
  cell: { width:100, height:100, borderWidth:1, justifyContent:"center", alignItems:"center" },
  text: { fontSize:32 }
});
