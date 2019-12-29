const prepareBody = (req, res, next) => {
    req.responseData = {
        status: res.statusCode,
        data: req.data,
        errors: [],
        warnings: []
    };
    next();
};
module.exports = prepareBody;