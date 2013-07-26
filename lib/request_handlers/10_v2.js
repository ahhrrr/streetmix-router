var config = require('config'),
    request = require('request'),
    url = require('url')

module.exports = function(req, res, next) {

  if (req.cookies && req.cookies.smbckt && (req.cookies.smbckt == 2)) {

    var targetUri = config.routers.v2.baseuri + req.url
    console.log('Routing request %s %s to %s...', req.method, req.url, targetUri)

    var headers = req.headers
    headers.host = url.parse(config.routers.v2.baseuri).hostname
    headers['X-Forwarded-For'] = req.connection.remoteAddress
    console.log(headers)

    req.pipe(request({
      method: req.method,
      uri: targetUri,
      headers: headers,
      followRedirect: false
    })).pipe(res)

  } else {
    next()
  }
} // END function - module.exports
