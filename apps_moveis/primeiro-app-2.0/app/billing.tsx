import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Billing() {
    return (
        <View>
            <Text>Ain jeanzada do xesquedele.</Text>
            <Text>Ain jeanzada do xesquedele.</Text>
            <Link href="/" style={styles.link}>
                Ir para a Home
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
