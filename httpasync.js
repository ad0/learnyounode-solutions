var http = require('http')

var nbreqs = 3

var result = []
var count = 0

for (i = 0 ; i < nbreqs ; i++) {
  (function (i) {
    http.get(process.argv[i+2], function (request) {
      request.setEncoding('utf8')
      var localdata = ''
      request.on('data', function (data) {
        localdata += data
      }).on('end', function () {
        result[i] = localdata
        count++
        if (count == nbreqs) {
          for (j = 0 ; j < nbreqs ; j++) {
            console.log(result[j])
          }
        }
      })
    })
  })(i)
}
