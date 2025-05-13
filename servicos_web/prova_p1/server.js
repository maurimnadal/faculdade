const express = require("express");
const app = express();
const jogosRoute = require("./routes/jogos");
const jogadoresRoute = require("./routes/jogadores")
const pontuacoesRoute = require("./routes/pontuacoes")

app.use(express.json());
app.use("/jogos", jogosRoute);
app.use("/jogadores", jogadoresRoute)
app.use("/pontuacoes", pontuacoesRoute)
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
