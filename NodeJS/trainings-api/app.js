require('./utils/db');
const app = require('express')();
const PORT = 9999;
app.listen(PORT, () => {
    console.log('Server is started!');
});
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const sportsmanRoute = require('./routes/sportsman');

app.use((request, response, next) => {
    console.log(request.url);
    next();  //передача действий следующей функции
});

app.use('/sportsman/', sportsmanRoute);

app.use((err, req, res, next) => {
    res.json({
        status: err.status,
        data: null,
        errors: [err.message]
    });
});
