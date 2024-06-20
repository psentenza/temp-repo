

const { readFileSync, writeFileSync } = require('fs')

// readFileSync recieve 2 parameters: 1) file path; 2) it`s oprions like encoding(utf-8) and/or flag
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first)
// console.log(second)


// this method will create a new file. it recieve up to 3 parameters: 1) filename(and path); 2) data ; 3)options
// in this example using writeFileSync method i created a file with name 'result-sync.txt' if content folder
// and with text inside this file 'Here is the result of: something is here!!!, AND and this is something completly new!!!'
writeFileSync('./content/result-sync.txt', `Here is the result of: ${first}, AND ${second}`)