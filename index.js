const server = require('./server');


// Require all endpoints here
require('./endpoints/hello');


const port = process.env.PORT || 8081;

// Start the server
server.listen(port, () => {
    server.log.info(`${server.name} listening at ${port}`);
});
