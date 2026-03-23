import { createContext, useContext, useState, ReactNode } from "react";

type GameContextType = {
  xColor: string;
  oColor: string;
  setXColor: (color: string) => void;
  setOColor: (color: string) => void;
};

const GameContext = createContext<GameContextType | null>(null);

export default function GameProvider({ children }: { children: ReactNode }) {
  const [xColor, setXColor] = useState("blue");
  const [oColor, setOColor] = useState("red");

  return (
    <GameContext.Provider value={{ xColor, oColor, setXColor, setOColor }}>
      {children}
    </GameContext.Provider>
  );
}

export default function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame deve ser usado dentro de GameProvider");
  }
  return context;
}