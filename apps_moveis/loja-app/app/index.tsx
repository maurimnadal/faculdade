import { useContext, useState } from "react";
import { View, TextInput, Button } from "react-native";
import { AppContext } from "../src/context/AppContext";
import { useRouter } from "expo-router";

export default function Login() {
  const { login } = useContext(AppContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    login(email, password);
    router.replace("/(tabs)/products");
  }

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}