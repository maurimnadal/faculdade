export type UserType = "servidor" | "aluno";

export type User = {
  id: string;
  nome: string;
  matricula: string;
  email: string;
  cpf: string;
  senha: string;
  tipo: UserType;
};

export type MealType = "Café da Manhã" | "Almoço" | "Jantar" | "Lanche";

export type Menu = {
  id: string;
  data: string;
  tipoRefeicao: MealType;
  itens: string[];
};

export type Notice = {
  id: string;
  titulo: string;
  mensagem: string;
  data: string;
};
