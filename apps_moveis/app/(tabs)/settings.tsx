import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function Settings() {
  const [xColor, setXColor] = useState("");
  const [oColor, setOColor] = useState("");

  return (
    <View style={styles.container}>
      <Text>Cor do X:</Text>
      <TextInput style={styles.input} value={xColor} onChangeText={setXColor}/>
      <Text>Cor do O:</Text>
      <TextInput style={styles.input} value={oColor} onChangeText={setOColor}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20 },
  input: { borderWidth:1, marginBottom:10, padding:10 }
});
