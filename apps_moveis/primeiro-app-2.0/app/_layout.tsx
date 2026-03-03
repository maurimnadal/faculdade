import { Redirect, Stack } from 'expo-router';

export default function RootLayout() {
    const estaConectado = true

    if(!estaConectado){
        return <Redirect href="/login"/>
    }
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="list" options={{ title: 'List' }} />
            <Stack.Screen name="[id]" options={{ title: 'Detalhes' }} />
            <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
        </Stack>
    );
}
