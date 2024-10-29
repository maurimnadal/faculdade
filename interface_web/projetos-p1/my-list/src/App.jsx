import React from 'react';
import './App.css';

function App() {

  const pessoas = [
    'Cláudio',
    'Ana Cláudia',
    'João Cláudio',
    'Bernardo',
    'Laura',
    'Maurício',
    'Alice',
    'Paulin',
    'Arildo'
  ];

  return (
    <div className="App">
      <h1>Lista de Pessoas Filtradas</h1>
      <ul>
        {pessoas.filter((pessoa) => pessoa.startsWith('A')).map((pessoa, index) => (

          <li key={index}>{pessoa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;