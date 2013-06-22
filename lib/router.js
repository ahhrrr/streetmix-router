module.exports = function() {

  var routeHandlers = []

  var handleRequest = function(handlerIndex, req, res) {
    
    var handler = routeHandlers[handlerIndex]

    if (handler) {

      handler(req, res, function() {
        
        ++handlerIndex
        if (routeHandlers.length > handlerIndex) {
          handleRequest(handlerIndex, req, res)
        }
        
      }) // END - handler
      
    } // END if - handler
    
  } // END function - handleRequest
  
  return {

    /*
     * @param handlers: { <name>: function(req, res, next), ... }
     */
    addRouteHandlers: function(handlers) {
      console.log('Registering multiple route handlers:')
      for (id in handlers) {
        var handler = handlers[id]
        console.log('* %s', id)
        this.addRouteHandler(handler)
      }
    }, // END function - addRouteHandlers

    /*
     * @param handler: function(req, res, next)
     */
    addRouteHandler: function(handler) {
      routeHandlers.push(handler)
    }, // END function - addRouteHandler

    route: function(req, res) {

      console.log("[%s] %s %s", new Date(), req.method, req.url)

      // Handle requests, starting with first handler
      if (routeHandlers.length > 0) {
        handleRequest(0, req, res)
      } // END if - routeHandlers.length

    } // END function - route

  } // END - public object

} // END function - module.exports
