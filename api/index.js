const express = require('express')
const bodyParse = require('body-parser')

const app = express()

app.use(bodyParse.json())

const port = 3000

app.get('/teste', (req,res) =>

    res.status(200).send({msg: 'API 100%'})
)


app.listen(port,() =>

    console.log("Servidor rodando na porta 3000")

)

module.exports = app


