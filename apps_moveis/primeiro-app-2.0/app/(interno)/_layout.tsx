import { Redirect, Stack } from 'expo-router';
import {AuthProvider, useAuth} from"@/contexts/auth"

export default function RootLayout() {
    const {isLogged}=useAuth()
    console.log(isLogged)
    if(!isLogged) return<Redirect  href="/login"/>
    return <Stack/>;
}
