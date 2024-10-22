const Student = ({ nome, nota }) => {
  return (
    <div>
      <h4>{nome}</h4>
      <p>Nota: {nota}</p>
    </div>
  );
};

export default Student;
