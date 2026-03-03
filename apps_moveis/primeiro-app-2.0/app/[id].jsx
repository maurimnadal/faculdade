import {Link, useLocalSearchParams, useRouter, Redirect} from "expo-router"
import {Button, StyleSheet, Text, View} from "react-native"
import {estados} from "../dados"

export default function(){
        const router = useRouter()
        const params = useLocalSearchParams()
        const idNumero = +params.id
        const bgc = params.color
        console.log(params)

        const voltar = () => {
            router.back()
        }

        const estado = estados.find(e => e.id === idNumero)

        if(!estado){
            return <Redirect href="/"/>
        }
    return(
        <View style={[styles.container, {backgroundColor: bgc}]}>
            <Text>Detalhes do registro {idNumero}</Text>
            <Text>Estado: {estado.nome}</Text>
            <Button title="Voltar" onPress={voltar}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    text: {
        fontSize: 20,
        margin: 10,
        color: 'red',
    },
    linkList: {
        fontSize: 20,
        margin: 10,
        color: 'white',
        textDecorationLine: 'underline',
    }
});