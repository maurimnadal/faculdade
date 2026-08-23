import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScreenHeader } from "../components/ScreenHeader";
import { ServiceCard } from "../components/ServiceCard";
import { useAuth } from "../contexts/AuthContext";
import { colors, radii, spacing } from "../theme";
import { AppTabParamList } from "../types/navigation";

type Navigation = BottomTabNavigationProp<AppTabParamList>;

export function ServicesScreen() {
  const navigation = useNavigation<Navigation>();
  const { user } = useAuth();
  const isServer = user?.tipo === "servidor";

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ScreenHeader
          title="Serviços"
          subtitle={
            isServer
              ? "Perfil servidor: acesso ao cardápio e visão administrativa demonstrativa."
              : "Perfil aluno: consulte refeições, favoritos e compartilhe o cardápio."
          }
        />

        <View style={styles.profileBanner}>
          <Text style={styles.bannerTitle}>Bem-vindo, {user?.nome}</Text>
          <Text style={styles.bannerText}>Perfil ativo: {user?.tipo}</Text>
        </View>

        <View style={styles.services}>
          <ServiceCard
            description="Veja a semana vigente, destaque de hoje, favoritos e compartilhamento."
            icon="silverware-fork-knife"
            onPress={() => navigation.navigate("Cardápio")}
            title="Cardápio do Refeitório"
          />
          <ServiceCard
            description="Acompanhe os cardápios marcados para consulta rápida."
            icon="heart-outline"
            onPress={() => navigation.navigate("Favoritos")}
            title="Meus favoritos"
          />
          <ServiceCard
            description={
              isServer
                ? "Inclua, altere e exclua refeições do cardápio."
                : "Disponível apenas para servidores."
            }
            disabled={!isServer}
            icon="calendar-edit"
            onPress={() => navigation.navigate("Gestão")}
            title="Gestão de cardápios"
          />
          <ServiceCard
            description={
              isServer
                ? "Publique e remova avisos do refeitório."
                : "Consulte avisos publicados pelo refeitório."
            }
            icon="bell-outline"
            onPress={() => navigation.navigate("Avisos")}
            title="Avisos do refeitório"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  },
  container: {
    padding: spacing.lg
  },
  profileBanner: {
    backgroundColor: colors.primary,
    borderRadius: radii.sm,
    gap: spacing.xs,
    marginBottom: spacing.lg,
    padding: spacing.md
  },
  bannerTitle: {
    color: colors.surface,
    fontSize: 18,
    fontWeight: "800"
  },
  bannerText: {
    color: colors.primarySoft,
    fontSize: 14,
    textTransform: "capitalize"
  },
  services: {
    gap: spacing.md
  }
});
