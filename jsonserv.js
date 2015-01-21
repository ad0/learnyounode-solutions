var http = require('http')
var url = require('url')

var server = http.createServer(function (request, response) {
  if (request.method != 'GET') {
    return response.end('not a GET req\n')
  }

  query = url.parse(request.url, true)
  if (query.pathname === '/api/parsetime') {
    var date = new Date(query.query.iso)
    var res = { hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds() }
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(res))
  } else if (query.pathname === '/api/unixtime') {
    var date = new Date(query.query.iso)
    var res = { unixtime: date.getTime() }
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(res))
  } else {
    return response.end('not a valid query\n')
  }
})
server.listen(process.argv[2])
