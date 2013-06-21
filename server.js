var http = require('http'),
    router = require(__dirname + '/lib/router.js')
    routeHandlers = require(__dirname + '/lib/route_handlers')

var r = router()
r.addRouteHandlers(routeHandlers)

var server = http.createServer(function(req, res) {
  r.route(req, res)
}) // END - http.createServer

var port = process.env.PORT || 7777
server.listen(port, null, null, function() {
  console.log('Streetmix router listening on port %d', port)
}) // END - server.listen
