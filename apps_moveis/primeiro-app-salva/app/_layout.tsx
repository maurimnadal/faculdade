import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" 
                    options={{title: "Home"}}
      />
      <Stack.Screen name="list" 
                    options={{title: "List"}}
      />
      <Stack.Screen name="list2" 
                    options={{title: "List 2"}}
      />

      <Stack.Screen name="[id]" 
                    options={{title: "Detalhes"}}
      />
    </Stack>
  );
}
