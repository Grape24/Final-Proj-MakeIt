
const MongoClient = require('mongodb').MongoClient;


const config = require('../config')

module.exports = {
    getCollection
}


// Database Name
<<<<<<< HEAD
const dbName = 'admin';
=======
const dbName = 'BOARD_DB';
// const dbName = 'admin';
>>>>>>> 03a535ae8f4806f3c3907f2ea9df7db369076f48

var dbConn = null;

async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}


async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(config.dbURL, { useNewUrlParser: true });
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch (err) {
        throw err;
    }
}




