import { Link, Redirect, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function Home() {
    const logado = false

    if(logado) return <Redirect href="/"/>

    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}