const app = require('./app')
const http = require('http')
const server = http.createServer(app)
server.listen(3000,()=>{
    console.log(`Listening to PORT ${process.env.PORT}`)
})