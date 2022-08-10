const http = require('http')
const _PORT = 5001

const server = http.createServer((req, res) => {
    console.log("Request event")
    res.end("Hello World")
})

server.listen(_PORT, () => {
    console.log(`Server is listing on port ${_PORT}`)
})