var fs = require('fs')
var path = require('path')

var dname = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(dname, function(err, data) {
  for (i = 0 ; i < data.length ; i++) {
    if (path.extname(data[i]) === ext) {
      console.log(data[i])
    }
  }
})
