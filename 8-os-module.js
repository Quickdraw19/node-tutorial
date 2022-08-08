const os = require('os')

console.log(os.userInfo())

console.log(`Uptime ${os.uptime() / 60 / 60 / 24} days`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem() / 1024 / 1024 / 1024,
    freeMem: os.freemem() / 1024 / 1024 / 1024
}
console.info(currentOS)