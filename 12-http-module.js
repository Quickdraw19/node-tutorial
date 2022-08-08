const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`<h1>Welcome to our website</h1>`)
    } else if (req.url === '/about') {
        res.end(`<h1>Welcome to our about page!</h1>`)
    } else {
        res.end(`<h1>404 Fail</h1>`)
    }
})

server.listen(5001)