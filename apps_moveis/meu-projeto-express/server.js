require("dotenv").config()
const express = require("express")
const jwt = require("jsonwebtoken")

const users = require("./users")

const PORT = process.env.PORT || 3000
const PRIVATE_KEY = process.env.PRIVATE_KEY

const app = express();

app.use(express.json())

app.get("/",(req, res) =>{
    return res.json({message: "ok"})
})

app.post("/login", (req, res) => {
    const {login, pwd} = req.body
    const user = users.find(
        u => u.login === login && u.pwd === pwd
    )

    if(!user) return res.status(403).json({
        error: "usuario ou senha incorretos"
    })

    const token = jwt.sign({id: user.id}, PRIVATE_KEY, {
        expiresIn: "15m"
    })

    return res.json({token})
})

const verifyToken = (req, res, next) => {
    const {authorization} = req.headers

    const token = authorization && authorization.split(" ")[1]

    if (!token) return res.status(401).json({
        error: "acesso negado"
    })

    try{
        req.user = jwt.verify(token, PRIVATE_KEY)
        next()
    } catch (e){
        return res.status(401).json({
            error: "token invalido"
        })
    }
}

app.get("/dashboard", verifyToken ,(req, res) =>{
    return res.json({
        message: `ola ${req?.user?.id}`
    })
})

app.listen(PORT, () =>{
    console.log(`servidor aberto em http://localhost:${PORT}`)
})


// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Olá, Express!');
// });

// app.listen(PORT, () => {
//   console.log(`Servidor rodando em http://localhost:${PORT}`);
// });