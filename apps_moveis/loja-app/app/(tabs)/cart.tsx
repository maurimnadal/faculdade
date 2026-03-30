import { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { AppContext } from "../../src/context/AppContext";

export default function Cart() {
    const { cart, removeFromCart } = useContext(AppContext);

    return (
        <FlatList
            data={cart}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <View>
                    <Text>{item.name}</Text>
                    <Button title="Remover" onPress={() => removeFromCart(index)} />
                </View>
            )}
        />
    );
}