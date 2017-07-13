

module.exports = {

    getGreeting: (req, res, next) => {
        req.log.info('GET /hello');

        const greeting = 'Hello World!';
        res.send(greeting);
        return next();
    },

};
