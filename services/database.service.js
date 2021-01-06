const mongoose = require('mongoose')

let user = (process.env.DB_USER || 'yaya')
let pwd = (process.env.DB_PASSWORD || 'yaya')
let host = process.env.DB_HOST || '127.0.0.1'
let port = process.env.DB_PORT || '27017'
let name = process.env.DB_NAME || 'yaya'

const MONGO_URI = `mongodb://${user}:${pwd}@${host}:${port}/${name}?retryWrites=true&w=majority`

const initialize = async () => {
    const options = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    console.log(`MONGO URI: ${MONGO_URI}`)
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URI, options, callbackConnect);
}

function callbackConnect(err) {
    if (err)
        console.log(`Connection: ${err}`)
    else
        console.log('Connection: Success')
}

module.exports = {initialize}
