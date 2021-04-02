const customExpress = require('./config/customExpress')
const connection = require('./infra/connection')

connection.connect(error => {
    if(erro) {
        console.log(error)
    } else {
        console.log('aa')
    }
})
const app = customExpress()
app.listen(3000, () => {
    console.log('servidor 3000')
})
