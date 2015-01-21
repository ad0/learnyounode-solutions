var fs = require('fs')

var fname = process.argv[2]

var data = fs.readFileSync(fname).toString()
var len = data.split('\n').length - 1

console.log(len)
