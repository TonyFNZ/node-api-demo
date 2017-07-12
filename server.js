const restify = require('restify');
const Bunyan = require('bunyan');


const logger = new Bunyan.createLogger({ // eslint-disable-line new-cap
    name: 'Demo REST API',
    streams: [{
        stream: process.stdout,
    }],
    serializers: {
        req: Bunyan.stdSerializers.req,
    },
});

const server = restify.createServer({
    name: 'Demo REST API',
    logger,
});


server.pre((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


server.use(restify.plugins.throttle({
    burst: 10,
    rate: 3,
    xff: true,
}));

// Parse request body and puts properties under req.params (and req.body)
server.use(restify.plugins.jsonBodyParser({ mapParams: false }));

// Parse query params
server.use(restify.plugins.queryParser());

server.use(restify.plugins.requestLogger());


/*server.on('after', restify.plugins.auditLogger({
    log: Bunyan.createLogger({
        name: 'audit',
        streams: [{
            stream: process.stdout,
        }],
        level: 'INFO',
    }),
    body: true,  // log req/res bodies
}));*/


module.exports = server;
