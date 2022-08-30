const bodyParse = require('body-parser')
const pessoas   = require('./pessoasRoute.js')
const turmas    = require('./turmasRoute.js')

module.exports = app => {
    app.use(bodyParse.json())
    app.use(pessoas,turmas)
}