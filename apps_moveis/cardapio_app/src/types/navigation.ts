import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  AppTabs: NavigatorScreenParams<AppTabParamList>;
};

export type AppTabParamList = {
  Serviços: undefined;
  Cardápio: undefined;
  Favoritos: undefined;
  Gestão: undefined;
  Avisos: undefined;
  Perfil: undefined;
};
