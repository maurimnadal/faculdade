import School from "./School";

import React from "react";

const Teacher = React.memo(({ nome, disciplina }) => {
    console.log(`Renderizando ${nome}`); 
    return (
        <div>
            <p>Nome: {nome}</p>
            <p>Idade: {disciplina}</p>
        </div>
    );
});
export default Teacher;