import { Link, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import {AuthProvider, useAuth} from"@/contexts/auth"


export default function Login() {
    const  {isLogged} = useAuth()

    if(isLogged) return<Redirect  href="/"/>

    return (
        <View>
            <Text>Login</Text>
        </View>
    );
}