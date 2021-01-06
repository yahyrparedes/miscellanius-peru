const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import
const errorHandler = require('./../handlers/errors.handler')
const routeWeb = require('../routes')
const routeApi = require('../routes/api')

const app = express();
const server = http.createServer(app);

//Cors
app.use(cors())

// Middlewares
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// routes
app.use('/', routeWeb);
app.use('/api', routeApi);

app.use(errorHandler.pathNotFound);
app.use(errorHandler.generalError);


const initialize = async () => {
    const promise = new Promise((resolve, reject) => {
        app.listen(process.env.PORT || 3000)
            .on('listening', () => {
                console.log(`Server is running on port ${process.env.PORT || '3000'}`);
                resolve();
            })
            .on('error', (error) => {
                console.log('Error in server: ' + error);
                reject(error);
            });

        server.listen();
        Promise.resolve();
    });

    await promise;
};

module.exports = {initialize, app};
