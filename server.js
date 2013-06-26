var http = require('http'),
    connect = require('connect'),
    router = require(__dirname + '/lib/router.js')
    requestHandlers = require(__dirname + '/lib/request_handlers')

var r = router()
r.addRequestHandlers(requestHandlers)

var port = process.env.PORT || 7777

var app = connect()
  .use(connect.cookieParser())
  .use(connect.query())
  .use(function(req, res) {
    r.route(req, res)
  })
  .listen(port)
