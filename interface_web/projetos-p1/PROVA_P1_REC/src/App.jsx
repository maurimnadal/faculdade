import './App.css'
import Registration from './components/Registration';
import EventList from './components/EventList';
import Salchipao from './components/Salchipao';

function App() {
  const palestras = [
    {
      id: 1, 
      titulo: "Desenvolvimento Web", 
      data: "28/10", 
      horario: "10h00", 
      local: "Online"
    },
    {
      id: 2, 
      titulo: "Segurança da Informação", 
      data: "29/10", 
      horario: "14h00", 
      local: "Presencial"
    },
    {
      id: 3,
      titulo: "Inteligência Artificial", 
      data: "30/10", 
      horario: "16h00", 
      local: "Online"
    },
    { 
      id: 4, 
      titulo: "Salchipão do ADS", 
      data: "31/10", 
      horario: "12h00", 
      local: "Presencial" 
    }
  ];

  return (
    <>
      <h1>XV Jornada Acadêmica</h1>
      <h3 className="subtitle">Participe da nossa Jornada Acadêmica que ocorrerá de 25 a 31 de Outubro.</h3>
      < Registration />
      < EventList palestras={palestras} />
      < Salchipao />
    </>
  )
}

export default App
