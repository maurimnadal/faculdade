import { useEffect, useState } from 'react'
import './App.css'

const arrayUsers = [
  {
    id: 1,
    name: 'Cláudio',
    age: 20
  },
  {
    id: 2,
    name: 'Paulo',
    age: 25
  },
  {
    id: 3,
    name: 'Bernardo',
    age: 18
  }]


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(arrayUsers);
  }, []);

  const handleIncreaseAge = () => {
    setUsers((prevUser) =>
      prevUser.map(user => ({
        ...user,
        age: user.age + 1
      })));
  };

  const handleAddLocation = () => {
    setUsers((prevUser) =>
      prevUser.map(user => ({
        ...user,
        location: 'brasil'
      })));
  };


  return (
    <>
      <div>
        <h1>Lista de Usuários</h1>
        <ul>
          {users.map(user => (
            <li>
              {user.name} - {user.age} anos {user.location && `- ${user.location}`}
            </li>
          ))}
        </ul>
        <button onClick={handleIncreaseAge}>Aumentar Idade</button>
        <button onClick={handleAddLocation}>Adicionar localização</button>
      </div>
    </>
  )
}

export default App
