var http = require('http')

http.get(process.argv[2], function (request) {
  request.setEncoding('utf8')
  var len = 0
  var result = ''
  request.on('data', function (data) {
    len += data.length
    result += data
  }).on('end', function () {
    console.log(len)
    console.log(result)
  })
})
