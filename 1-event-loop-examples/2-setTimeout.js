// Starting operating system process.
console.log("First")

setTimeout(() => {
    console.log("Second")
}, 0) // Even at 0 seconds timeout, it's getting offloaded so it happens after next line.

console.log("Third")
// Completed and exited operating system process.