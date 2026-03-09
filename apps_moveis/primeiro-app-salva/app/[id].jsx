import { Redirect, useLocalSearchParams, useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

import { estados } from '../dados';

export default function () {
    const router = useRouter()
    const params = useLocalSearchParams()
    const idNumero = +params.id
    console.log(params)

    const bg = params.color

    const estado = estados.find(e => e.id === idNumero)

    if (!estado) return <Redirect href="/"/>

    const voltar = () => {
        router.back()
    }
    
    return (
        <View style={
            [
                style.container, 
                {backgroundColor: bg}
            ]
        }>
            <Text>Estado: {estado.nome}</Text>
            <Button 
                title="Voltar" 
                onPress={voltar}/>
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