const server = require('../server');
const handler = require('../handlers/hello');


server.get({
    path: '/hello',
    version: '0.0.1',
}, [
    handler.getGreeting,
]);
