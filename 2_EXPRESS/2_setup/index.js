const express = require('express')

const app = express()

// GET = Envia informações do back-end para o front-end
// POST = Recebe informações do front-end no back-end

app.get('/', (requisicao, resposta) => {
    resposta.send("Esse é o meu back-end")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})