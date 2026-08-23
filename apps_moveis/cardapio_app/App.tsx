import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import { FavoritesProvider } from "./src/contexts/FavoritesContext";
import { MenuProvider } from "./src/contexts/MenuContext";
import { NoticesProvider } from "./src/contexts/NoticesContext";
import { LoginScreen } from "./src/screens/LoginScreen";
import { RegisterScreen } from "./src/screens/RegisterScreen";
import { AppTabs } from "./src/navigation/AppTabs";
import { RootStackParamList } from "./src/types/navigation";
import { colors } from "./src/theme";

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="AppTabs" component={AppTabs} />
        ) : null}
        {!user ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center"
  }
});

export default function App() {
  return (
    <AuthProvider>
      <MenuProvider>
        <NoticesProvider>
          <FavoritesProvider>
            <StatusBar style="dark" backgroundColor={colors.background} />
            <RootNavigator />
          </FavoritesProvider>
        </NoticesProvider>
      </MenuProvider>
    </AuthProvider>
  );
}
