import { User } from "../types/models";

export const users: User[] = [
  {
    id: "u-001",
    nome: "Ana Souza",
    matricula: "2026001",
    email: "ana.souza@aluno.edu",
    cpf: "11122233344",
    senha: "123456",
    tipo: "aluno"
  },
  {
    id: "u-002",
    nome: "Carlos Lima",
    matricula: "SRV-100",
    email: "carlos.lima@instituicao.edu",
    cpf: "55566677788",
    senha: "123456",
    tipo: "servidor"
  }
];
