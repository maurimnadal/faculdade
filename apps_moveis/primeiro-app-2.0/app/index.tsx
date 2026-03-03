import { Link, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import {estados} from "../dados"

export default function Index() {
    const router = useRouter()
    const onPress = () => {
        router.push({pathname: "/[id]", params: {id: 58}})
    }

    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ain jeanzada do xesquedele.</Text>
            <Text>Ain jeanzada do xesquedele.</Text>
            <Link href="/list" style={styles.linkList}>
                Ir para a List
            </Link>
            <Link href={{
                pathname: "/[id]", 
                params: {
                    id: 5,
                    color: '#554af0ff',
                    color2: 'blue'
                }
            }} 
                style={styles.linkList}>
                    Registro 1
            </Link>
            <Button
            title="BOTÃO"
            onPress={onPress}
            />

            {estados.map(estado=>(
                <Link key={estado.id} href={`/${estado.id}`}>{estado.uf}</Link>
            ))}
        </View>
    );
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
    },
});
