// const fs = require('fs')
// const readFileSync = fs.readFileSync
// const writeFileSync = fs.writeFileSync

const {readFile, writeFile} = require('fs')

console.log("START")

readFile('./content/first.txt', 'utf-8', (error, result) => {
    if (error) {
        console.log(`Error reading first.txt: ${error}`)
        return
    }
    console.log(result)
    const first = result

    readFile('./content/second.txt', 'utf-8', (error, result) => {
        if (error) {
            console.log(`Error reading second.txt: ${error}`)
            return
        }

        console.log(result)
        const second = result

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first} AND ${second}`,
            (error, result) => {
                if (error) {
                    console.log(`Error writing result-async.txt: ${error}`)
                    return
                }

                console.log("Done with this task.")
            }
        )
    })
})

console.log("Starting next task.")