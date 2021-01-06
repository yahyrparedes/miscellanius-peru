'use strict'
require('dotenv').config();
// const serviceDatabase = require('./database.service');
const serviceServer = require('./server.service');

const start = async () => {
    try {
        await serviceServer.initialize();
        // await serviceDatabase.initialize();
    } catch (err) {
        console.log(`An error has happened: ${err}`);
    }
}

module.exports = {start};
