import { memo } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
const Teacher = memo(({ nome, disciplina }) => {
  console.log(`Rendering: ${nome}`); // Log para verificar quando o componente é re-renderizado
  return (
    <div>
      <p>
        <strong>Nome:</strong> {nome}
      </p>
      <p>
        <strong>Disciplina:</strong> {disciplina}
      </p>
    </div>
  );
});
export default Teacher;
