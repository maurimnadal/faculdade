import  { useState } from 'react';
import Teacher from './Teacher';

const School = () => {
  const [teacher, setTeacher] = useState({
    nome: "Prof. João",
    disciplina: "Matemática",
  });
  const [schoolName, setSchoolName] = useState("Escola ABC");

  // Função para alterar a disciplina do professor
  const changeSubject = () => {
    setTeacher((prevTeacher) => ({
      ...prevTeacher,
      disciplina: prevTeacher.disciplina === "Matemática" ? "Física" : "Matemática",
    }));
  };

  // Função para alterar o nome da escola
  const changeSchoolName = () => {
    setSchoolName(prev => (prev === 'Escola ABC' ? 'Escola XYZ' : 'Escola ABC'));    
  };

  return (
    <div>
      <h1>{schoolName}</h1>
      <Teacher nome={teacher.nome} disciplina={teacher.disciplina} />
      <button onClick={changeSubject}>Alterar Disciplina do Professor</button>
      <button onClick={changeSchoolName}>Alterar Nome da Escola</button>
    </div>
  );
};

export default School;