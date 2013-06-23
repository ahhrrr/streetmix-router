var config = require('config'),
    request = require('request')

module.exports = function(req, res, next) {
  if (!req.cookies || !req.cookies.smbckt) {
    request({
      method: req.method,
      uri: config.routers.v1.baseuri + req.url,
      followRedirect: false
    }).pipe(res)
  } else {
    next()
  }
} // END function - module.exports
