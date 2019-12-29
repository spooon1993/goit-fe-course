const route = require('express').Router();
const controller = require('../contollers/sportsman');

route.post('/', controller.create, (req, res) => {
    res.json({
        status: 200,
        data: req.data
    })
});
route.get('/', controller.readAll, (req, res) => {
    res.json({
        status: 200,
        data: req.data
    })
});

module.exports = route;