var dateUtls = require('date-utils')

module.exports = function(req, res, next) {

  var m = req.url.match(/[\?&]b=([^&]+)/)
  if (m) {

    var bucket = m[1]

    var expirationDate = new Date()
    expirationDate.addMinutes(expirationDate.getTimezoneOffset())
    expirationDate.addMonths(6)

    console.log('Placing user in bucket = %s', bucket)
    res.setHeader('Set-Cookie', 'smbckt=' + bucket + '; Expires=' + expirationDate.toFormat('DDD, DD MMM YYYY HH24:MI:SS'))
    res.setHeader('Location', '/')
    res.statusCode = 307
    res.end()

  } else {
    next()
  }

} // END function - module.exports
