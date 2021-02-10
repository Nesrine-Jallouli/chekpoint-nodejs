var fs = require('fs');
var http = require('http');

//creation of the server

const server = http.createServer(function (request, response) {
  response.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(response)
})

server.listen(Number(process.argv[2]))