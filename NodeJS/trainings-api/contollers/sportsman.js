const Sportsman = require('../models/sportsman');

const controller = {
    create(req, res, next){
        Sportsman.create({
            name: req.body.name,
            password: req.body.password
        })
            .then((user) => {
                req.data = user._doc;
                next();
            })
            .catch((err) => {
                const error = new Error(err);
                error.status = 400;
                next(error);
            })
    },
    readAll(req, res, next){
        Sportsman.find({}).exec()
            .then((users) => {
                req.data = users;
                next();
            })
    }

};
module.exports = controller;