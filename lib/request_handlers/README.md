Files in this folder (except for `index.js`) define request handlers. They are called in alphabetical order to handle each request that is received by the HTTP server.

Some files are named with a `00_` prefix. These are internal request handlers that do some processing on the request (such as parsing cookies) and pass it on to the next request handler for further handling.

Non-internal request handlers (i.e. files without a `_` prefix in their name) should handle the request in one of two ways:
* By routing (proxying) it to the appropriate origin server, *OR*
* By ignoring it and letting the next route handler handle it.

