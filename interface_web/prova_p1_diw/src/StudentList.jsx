import  { useState, useEffect } from "react";

const StudentList = () => {
  // Estado inicial: lista de estudantes vazia
  const [students, setStudents] = useState([]);

  // Função para carregar dados dos estudantes
  useEffect(() => {
    const data = [
      { nome: "João", nota: 8 },
      { nome: "Maria", nota: 9 },
      { nome: "Carlos", nota: 7 },
      { nome: "Ana", nota: 10 }
    ];
    setStudents(data); // Define a lista de estudantes imediatamente
  }, []); // Executa o efeito uma vez após o componente montar

  // Função para adicionar um novo estudante diretamente no código
  const addStudent = () => {
    const newStudent = { nome: "Pedro", nota: 9 };
    setStudents((prevStudents) => [...prevStudents, newStudent]); // Adiciona o novo estudante
  };

  return (
    <div>
      <h2>Lista de Estudantes</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.nome} - Nota: {student.nota}
          </li>
        ))}
      </ul>

      <button onClick={addStudent}>Adicionar Estudante Pedro</button>
    </div>
  );
};

export default StudentList;
