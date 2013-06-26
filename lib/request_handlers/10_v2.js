var config = require('config'),
    request = require('request'),
    url = require('url')

module.exports = function(req, res, next) {

  if (req.cookies && req.cookies.smbckt && (req.cookies.smbckt == 2)) {

    var originUri = config.routers.v2.baseuri + req.url
    console.log('Routing request %s %s to %s...', req.method, req.url, originUri)

    var headers = req.headers
    headers.host = url.parse(config.routers.v2.baseuri).hostname

    request({
      method: req.method,
      uri: originUri,
      headers: headers,
      followRedirect: false
    }).pipe(res)
  } else {
    next()
  }
} // END function - module.exports
