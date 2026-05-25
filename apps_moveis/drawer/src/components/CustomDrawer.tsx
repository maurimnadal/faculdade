import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CustomDrawer(props: any) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>Mauricio</Text>
                <Text style={styles.email}>maurim.nadal@gmail.com</Text>
            </View>

            <View style={styles.content}>
                <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate("index")}>
                    <Ionicons name="home" size={24} color="white" />
                    <Text style={styles.menuItemText}>Principal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate("settings")}>
                    <Ionicons name="settings" size={24} color="white" />
                    <Text style={styles.menuItemText}>Configurações</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.logout} onPress={() => alert("Logout")}>
                <Ionicons name="exit-sharp" size={24} color="white" />
                <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1A1E"
    },
    header: {
        padding: 24,
        paddingTop: 60,
        backgroundColor: "#111113",
        borderBottomWidth: 1,
        borderBottomColor: "#111113",
    },
    name: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    email: {
        color: "#8E8E93",
        fontSize: 14
    },
    content: {
        flex: 1,
        padding: 12,
        gap: 8
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#111113"
    },
    menuItemText: {
        color: "white",
        fontSize: 16
    },
    footer: {
        padding: 24,
        borderTopWidth: 1,
        borderTopColor: "#111113",
        backgroundColor: "#111113"
    },
    logoutText: {
        color: "red",
        fontSize: 16,
        fontWeight: "bold"
    },
    logout: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    }
});
