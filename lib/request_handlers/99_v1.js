var config = require('config'),
    request = require('request')

module.exports = function(req, res, next) {

  var originUri = config.routers.v1.baseuri + req.url
  console.log('Routing request %s %s to %s...', req.method, req.url, originUri)

  request({
    method: req.method,
    uri: originUri,
    followRedirect: false
  }).pipe(res)

} // END function - module.exports
