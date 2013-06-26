var config = require('config'),
    request = require('request')

module.exports = function(req, res, next) {

  if (req.cookies && req.cookies.smbckt && (req.cookies.smbckt == 2)) {

    var originUri = config.routers.v2.baseuri + req.url
    console.log('Routing request %s %s to %s...', req.method, req.url, originUri)

    request({
      method: req.method,
      uri: originUri,
      headers: req.headers,
      followRedirect: false
    }).pipe(res)
  } else {
    next()
  }
} // END function - module.exports
