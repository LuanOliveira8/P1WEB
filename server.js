const app = require("./index.js")



require("dotenv").config({path:'variables.env'})

app.set('port', ( process.env.port||process.env.portsec))
const server = app.listen(app.get('port'), () => {
    console.log("Servidor Ok " + server.address().port)
})