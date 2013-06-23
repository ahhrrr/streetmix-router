module.exports = function(req, res, next) {

  req.cookies = {}

  if (req.headers.cookie) {

    var cookieHeaders = req.headers.cookie.split(',')
    for (cookieHeaderIndex in cookieHeaders) {

      var cookieHeader = cookieHeaders[cookieHeaderIndex]

      var cookies = cookieHeader.split(';')

      for (cookieIndex in cookies) {

        var cookie = cookies[cookieIndex].trim()
        var cookieKV = cookie.split('=')
        if (cookieKV.length == 2) {
          req.cookies[cookieKV[0]] = cookieKV[1]
        } // END if - cookieKV.length

      } // END for - cookies
      
    } // END for - cookieHeaders
  
  } // END if - req.headers.cookie

  next()

} // END function - module.exports
