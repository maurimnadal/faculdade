import { memo } from "react";


const Salchipao = memo(() => {
  console.log("Renderizando aviso");
  return (
    <div className="salchipao">
        <h2>Salchipão do ADS</h2>
        <p>Não perca o encerramento da nossa jornada com o famoso Salchipão no dia 31/10 às 12h00.</p>
    </div>
  );
});

export default Salchipao;