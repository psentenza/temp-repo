// npm - global command, comes with node
// npm --version (--v) - check version of npm

// local dependency - after install it like local, i can use this package only in project where i install it
// npm i <packageName> - command to install npm module

// global dependency - after install it like global, i can use it in any other projects
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important information about aor project/package)
// 3 ways to create package.json:
// 1) manual aproach (create manuale package.json file in root, create properties etc)
// 2) npm init (step by step, press enter to skip)
// 3) npm init -y (everything dafault)


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);