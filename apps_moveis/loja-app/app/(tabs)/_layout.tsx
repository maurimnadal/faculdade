import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="products" options={{ title: "Produtos" }} />
      <Tabs.Screen name="cart" options={{ title: "Carrinho" }} />
    </Tabs>
  );
}