const bodyParse = require('body-parser')
const pessoa = require('./pessoasRoute.js')

module.exports = app => {
    app.use(bodyParse.json())
    app.use(pessoa)
}