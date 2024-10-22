import Classroom from './Classroom';
import './App.css'

// Dados da Turma
const turma = {
  nomeDaTurma: 'Turma A',
  estudantes: [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 9 },
    { nome: 'Carlos', nota: 7 },
  ],
};

function App() {
  
  return (
    <>
      <Classroom nomeDaTurma={turma.nomeDaTurma} estudantes={turma.estudantes} />
    </>
  )
}

export default App
