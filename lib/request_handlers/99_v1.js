var config = require('config'),
    request = require('request'),
    url = require('url')

module.exports = function(req, res, next) {

  var targetUri = config.routers.v1.baseuri + req.url
  console.log('Routing request %s %s to %s...', req.method, req.url, targetUri)

  var headers = req.headers
  headers.host = url.parse(config.routers.v1.baseuri).hostname

  req.pipe(request({
    method: req.method,
    uri: targetUri,
    headers: headers,
    followRedirect: false
  })).pipe(res)

} // END function - module.exports
