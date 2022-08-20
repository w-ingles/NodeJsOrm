const bodyParse = require('body-parser')
const pessoas = require('./pessoasRoute.js')

module.exports = app => {
    app.use(bodyParse.json())
    app.use(pessoas)
}