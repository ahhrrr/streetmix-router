module.exports = function() {

  var requestHandlers = []

  var handleRequest = function(handlerIndex, req, res) {
    
    var handler = requestHandlers[handlerIndex]

    if (handler) {

      handler(req, res, function() {
        
        ++handlerIndex
        if (requestHandlers.length > handlerIndex) {
          handleRequest(handlerIndex, req, res)
        }
        
      }) // END - handler
      
    } // END if - handler
    
  } // END function - handleRequest
  
  return {

    /*
     * @param handlers: { <name>: function(req, res, next), ... }
     */
    addRequestHandlers: function(handlers) {
      console.log('Registering multiple request handlers:')
      for (id in handlers) {
        var handler = handlers[id]
        console.log('* %s', id)
        this.addRequestHandler(handler)
      }
    }, // END function - addRequestHandlers

    /*
     * @param handler: function(req, res, next)
     */
    addRequestHandler: function(handler) {
      requestHandlers.push(handler)
    }, // END function - addRequestHandler

    route: function(req, res) {

      // Handle requests, starting with first handler
      if (requestHandlers.length > 0) {
        handleRequest(0, req, res)
      } // END if - requestHandlers.length

    } // END function - route

  } // END - public object

} // END function - module.exports
