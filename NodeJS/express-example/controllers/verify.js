const jwt = require('jsonwebtoken');
const KEY = 'secret';
const verify = (req, res, next) => {
    const token = req.query.token || req.body.token || req.headers.token;

    if(!token) {
        let err = new Error("Please send token");
        err.status = 401;
        next(err);
    }
    jwt.verify(token, KEY, (err, decode) => {
        if(err) {
            err.status = 403;
            next(err)
        }
        req.tokenInfo = decode;
        next();
    })
};

module.exports = verify;