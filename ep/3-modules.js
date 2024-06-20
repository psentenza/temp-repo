// ComminJS, every file is module (by dafeult)
// Module - Encapsulated Code (only share minimun)


const names = require('./ep/4-names.js')
const sayHi = require('./ep/5-utils.js')
const data = require('./ep/6-alternative-flavor.js')
// require('./ep/7-mind-grande.js')
console.log(data)

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);