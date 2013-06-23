var http = require('http'),
    router = require(__dirname + '/lib/router.js')
    requestHandlers = require(__dirname + '/lib/request_handlers')

var r = router()
console.log(requestHandlers)
r.addRouteHandlers(requestHandlers)

var server = http.createServer(function(req, res) {
  r.route(req, res)
}) // END - http.createServer

var port = process.env.PORT || 7777
server.listen(port, null, null, function() {
  console.log('Streetmix router listening on port %d', port)
}) // END - server.listen
