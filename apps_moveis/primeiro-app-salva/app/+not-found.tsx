import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFound () {
    return (
        <View style={style.container}>
            <Text>Acesso Inválido!</Text>
            <Link replace={true} href="/">Voltar para Home</Link>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})