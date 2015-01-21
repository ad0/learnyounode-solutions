module.exports = filteredls

var fs = require('fs')
var path = require('path')

function filteredls(dname, ext, callback) {
  fs.readdir(dname, function(err, list) {
    if (err) {
      return callback(err)
    }
    var filtered = []
    for (i = 0 ; i < list.length ; i++) {
      if (path.extname(list[i]) === '.' + ext) {
        filtered.push(list[i])
      }
    }
    callback(null, filtered)
  })
}
