import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";

import { users } from "../data/users";
import { User, UserType } from "../types/models";

type RegisterUserInput = {
  nome: string;
  matricula: string;
  email: string;
  cpf: string;
  senha: string;
  tipo: UserType;
};

type AuthContextValue = {
  isLoading: boolean;
  user: User | null;
  users: User[];
  signIn: (cpf: string, senha: string) => boolean;
  register: (input: RegisterUserInput) => { ok: boolean; message?: string };
  signOut: () => void;
};

const USERS_STORAGE_KEY = "@cardapio_app:users";
const CURRENT_USER_STORAGE_KEY = "@cardapio_app:current_user";
const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<User[]>(users);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    async function loadAuthState() {
      try {
        const [storedUsers, storedUserId] = await Promise.all([
          AsyncStorage.getItem(USERS_STORAGE_KEY),
          AsyncStorage.getItem(CURRENT_USER_STORAGE_KEY)
        ]);
        const parsedUsers = parseUsers(storedUsers) ?? users;

        setRegisteredUsers(parsedUsers);

        if (storedUserId) {
          setUser(parsedUsers.find((candidate) => candidate.id === storedUserId) ?? null);
        }
      } finally {
        setHydrated(true);
        setIsLoading(false);
      }
    }

    loadAuthState();
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    AsyncStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(registeredUsers));
  }, [hydrated, registeredUsers]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    if (user) {
      AsyncStorage.setItem(CURRENT_USER_STORAGE_KEY, user.id);
      return;
    }

    AsyncStorage.removeItem(CURRENT_USER_STORAGE_KEY);
  }, [hydrated, user]);

  const value = useMemo<AuthContextValue>(
    () => ({
      isLoading,
      user,
      users: registeredUsers,
      signIn: (cpf, senha) => {
        const normalizedCpf = normalizeCpf(cpf);
        const authenticatedUser = registeredUsers.find(
          (candidate) =>
            normalizeCpf(candidate.cpf) === normalizedCpf && candidate.senha === senha
        );

        if (!authenticatedUser) {
          return false;
        }

        setUser(authenticatedUser);
        return true;
      },
      register: (input) => {
        const normalizedCpf = normalizeCpf(input.cpf);
        const normalizedEmail = input.email.trim().toLowerCase();
        const requiredFields = [
          input.nome,
          input.matricula,
          input.email,
          input.cpf,
          input.senha
        ];

        if (requiredFields.some((field) => !field.trim())) {
          return { ok: false, message: "Preencha todos os campos para concluir o cadastro." };
        }

        const alreadyExists = registeredUsers.some(
          (candidate) =>
            normalizeCpf(candidate.cpf) === normalizedCpf ||
            candidate.email.toLowerCase() === normalizedEmail ||
            candidate.matricula.toLowerCase() === input.matricula.trim().toLowerCase()
        );

        if (alreadyExists) {
          return { ok: false, message: "CPF, e-mail ou matrícula já cadastrados." };
        }

        if (normalizedCpf.length !== 11) {
          return { ok: false, message: "Informe um CPF válido com 11 dígitos." };
        }

        const newUser: User = {
          id: `u-${Date.now()}`,
          nome: input.nome.trim(),
          matricula: input.matricula.trim(),
          email: normalizedEmail,
          cpf: normalizedCpf,
          senha: input.senha,
          tipo: input.tipo
        };

        setRegisteredUsers((currentUsers) => [...currentUsers, newUser]);
        setUser(newUser);

        return { ok: true };
      },
      signOut: () => setUser(null)
    }),
    [isLoading, registeredUsers, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function normalizeCpf(value: string) {
  return value.replace(/\D/g, "");
}

function parseUsers(value: string | null) {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value);

    if (Array.isArray(parsed)) {
      return parsed.filter(isUser);
    }
  } catch {
    return null;
  }

  return null;
}

function isUser(value: unknown): value is User {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as User;

  return (
    typeof candidate.id === "string" &&
    typeof candidate.nome === "string" &&
    typeof candidate.matricula === "string" &&
    typeof candidate.email === "string" &&
    typeof candidate.cpf === "string" &&
    typeof candidate.senha === "string" &&
    (candidate.tipo === "aluno" || candidate.tipo === "servidor")
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider.");
  }

  return context;
}
