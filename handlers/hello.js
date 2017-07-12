

module.exports = {

    getGreeting: (req, res, next) => {
        const greeting = 'Hello World!';
        res.send(greeting);
        return next();
    },

};
