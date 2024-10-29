import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [jogador, setJogador] = useState({
    nome: 'Jogador 1',
    nivel: 1,
    pontuacao: 0,
  })
  const aumentarPontuacao = () => {
    setJogador((prevJogador) => ({
      ...prevJogador,
      pontuacao: prevJogador.pontuacao + 10
    })
    )
  };
  const subirNivel = () => {
    setJogador((prevJogador) => ({
      ...prevJogador,
      nivel: prevJogador.nivel + 1
    })
    )
  };
  useEffect(() => {
    console.log('Estado do jogador atualizado:', jogador);
  }, [jogador]);
  return (
    <>
      <div>
        <h1>Perfil do Jogador</h1>
        <p>Nome: {jogador.nome}</p>
        <p>Nível: {jogador.nivel}</p>
        <p>Pontuação: {jogador.pontuacao}</p>
        <button onClick={() => aumentarPontuacao()}>Aumentar Pontuação</button>
        <button onClick={() => subirNivel()}>Subir Nível</button>
      </div>
    </>
  )
}

export default App
