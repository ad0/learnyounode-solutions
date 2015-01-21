var fs = require('fs')

var fname = process.argv[2]
fs.readFile(fname, function(err, data) {
  var len = data.toString().split('\n').length - 1
  console.log(len)
})
