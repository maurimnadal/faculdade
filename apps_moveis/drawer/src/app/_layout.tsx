import CustomDrawer from "@/components/CustomDrawer";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return <Drawer drawerContent={(props) => <CustomDrawer {...props} />}>
    <Drawer.Screen name="index" options={{drawerLabel: "Principal"}}/>
  </Drawer>;
}
