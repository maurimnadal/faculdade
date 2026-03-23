import { View, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input}/>
      <TextInput placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} style={styles.input}/>
      <Button title="Login" onPress={() => router.replace("/(tabs)/game")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:"center", padding:20 },
  input: { borderWidth:1, marginBottom:10, padding:10 }
});
