import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFound() {
    return (
        <View>
            <Text>List Screen</Text>
            <Link style={styles.link} href="/" replace={true}>
                Voltar
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    link: {
        fontSize: 20,
        margin: 10,
        color: 'red',
        textDecorationLine: 'underline',
    },
});
