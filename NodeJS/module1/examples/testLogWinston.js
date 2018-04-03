const winston = require('winston');
const {format} = require('winston');

const logger = winston.createLogger({
    format: format.simple(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'time.log' })
    ]
});

// setInterval( () => {
//     const date = new Date();
//     const {hours, minutes, seconds, Milliseconds} = {
//         hours: date.getHours(),
//         minutes: date.getMinutes(),
//         seconds: date.getSeconds(),
//         Milliseconds: date.getMilliseconds()
//     }
//     const time = `${hours}:${minutes}:${seconds}:${Milliseconds}`;
//     logger.info( `${time} --> example: one seconds is going` )
// }, 1000)

const logIn = (logs) => {
    logger.info( logs );
}

module.exports.logIn = logIn;