const winston = require("winston");
const { LOG_DB_URL } = require("./server.config");
require('winston-mongodb');

const allowedTransports = [];

// transport for Console that is getting the logs in console
allowedTransports.push(new winston.transports.Console({
    // defining separate custom format for Console transport and thus it overrides that myOwn default format
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss' 
        }),

        // second argument to the combine method, which defines what exactly is going to be printed
        winston.format.printf((log) => {
            return `[${log.timestamp}] [${log.level.toUpperCase()}]: ${log.message}`; 
        })
    )        
}));

// transport for mongodb database that is getting the logs in database
allowedTransports.push(new winston.transports.MongoDB({
    level:'error',
    db:LOG_DB_URL,
    collection:'logs',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
}));

// transport for file that is getting the logs in app.log file
allowedTransports.push(new winston.transports.File({
    filename:'app.log'
}))


const logger = winston.createLogger({
    // myOwn default fomatting
    format: winston.format.combine(
        // first argument to the combine method which defines how we want the timestamp to be
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss' 
        }),
        // second argument to the combine method, which defines what exactly is going to be printed
        winston.format.printf((log) => {
            return `[${log.timestamp}] [${log.level.toUpperCase()}]: ${log.message}`; 
        }),
    ),
    transports: allowedTransports
});

module.exports = logger;
