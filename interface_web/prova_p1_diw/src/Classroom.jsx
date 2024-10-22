import Student from "./Student";

const Classroom = ({ nomeDaTurma, estudantes }) => {
  return (
    <div>
      <h2>{nomeDaTurma}</h2>
      <p>Quantidade de Estudantes: {estudantes.length}</p>
      {estudantes.map((estudante, index) => (
        <Student key={index} nome={estudante.nome} nota={estudante.nota} />
      ))}
    </div>
  );
};

export default Classroom;
