const bodyParse = require('body-parser')


module.exports = app => {
    app.use(bodyParse.json())
    app.get('/',(req,res) =>{
        res.send( {ola:'óla'}   )
    })
}