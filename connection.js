require('dotenv').config()
const mongoose = require('mongoose')
const uri =process.env.MONGO_DB_URL
const dbName = process.env.DB_NAME
async function dbConnection() {
    try {
        const connectionpOptions = {
            dbName,
            useUnifiedTopology: true,
          }
        await mongoose.connect(uri, connectionpOptions).then((res) = console.log('connected'))
    }
    catch (err) {
        console.log("err", err)
    }
}

module.exports = {
    dbConnection
}