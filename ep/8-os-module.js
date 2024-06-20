// This is a little example of a build in module of nodeJS - os (operation system)

// In nodeJS i don`t have an access to DOM or window, unlike in browser, but i have access to another global objects like 'os' 
// or 'path' or 'filesystem'

// this is how i connect os module
const os = require('os')

// info about current user

const user = os.userInfo()
console.log(user)

// method return the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

// another methods about current os
const currentOs = {
    name: os.type(),
    release: os.release(),
    totatMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)