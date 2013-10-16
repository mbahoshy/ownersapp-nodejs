var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle["/"] = requestHandlers.start;
handle["/modelSearch"] = requestHandlers.modelSearch;
server.start(router.route, handle);