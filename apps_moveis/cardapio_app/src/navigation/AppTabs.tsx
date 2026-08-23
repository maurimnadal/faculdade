import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FavoritesScreen } from "../screens/FavoritesScreen";
import { ManagementScreen } from "../screens/ManagementScreen";
import { MenuScreen } from "../screens/MenuScreen";
import { NoticesScreen } from "../screens/NoticesScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { ServicesScreen } from "../screens/ServicesScreen";
import { useAuth } from "../contexts/AuthContext";
import { colors } from "../theme";
import { AppTabParamList } from "../types/navigation";

const Tab = createBottomTabNavigator<AppTabParamList>();

export function AppTabs() {
  const { user } = useAuth();
  const isServer = user?.tipo === "servidor";

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          borderTopColor: colors.border,
          minHeight: 62,
          paddingBottom: 8,
          paddingTop: 8
        },
        tabBarIcon: ({ color, size }) => {
          const icons: Record<keyof AppTabParamList, keyof typeof MaterialCommunityIcons.glyphMap> = {
            Serviços: "view-dashboard-outline",
            Cardápio: "silverware-fork-knife",
            Favoritos: "heart-outline",
            Gestão: "calendar-edit",
            Avisos: "bell-outline",
            Perfil: "account-circle-outline"
          };

          return <MaterialCommunityIcons name={icons[route.name]} color={color} size={size} />;
        }
      })}
    >
      <Tab.Screen name="Serviços" component={ServicesScreen} />
      <Tab.Screen name="Cardápio" component={MenuScreen} />
      <Tab.Screen name="Favoritos" component={FavoritesScreen} />
      {isServer ? <Tab.Screen name="Gestão" component={ManagementScreen} /> : null}
      <Tab.Screen name="Avisos" component={NoticesScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
