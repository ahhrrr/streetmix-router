var config = require('config'),
    request = require('request')

module.exports = function(req, res, next) {
  if (!req.cookies || !req.cookies.smbckt) {
    request.get(config.routers.v1.baseuri + req.url).pipe(res)
  } else {
    next()
  }
} // END function - module.exports
