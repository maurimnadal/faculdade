import { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { AppContext } from "../../src/context/AppContext";

export default function Products() {
  const { products, addToCart } = useContext(AppContext);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.details}</Text>
          <Button title="Adicionar" onPress={() => addToCart(item)} />
        </View>
      )}
    />
  );
}