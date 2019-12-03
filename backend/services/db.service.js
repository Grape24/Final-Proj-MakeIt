
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://nevonoam:bcubugo22@boards-rmsul.mongodb.net/test?retryWrites=true&w=majority'
const client = new MongoClient(uri, { userNameUrlParser: true })
client.connect(err => {
    console.log('connected to mongo')
    const collection = client.db('BOARD_DB').collection('board')
    collection.find().toArray()
        .then(res => console.log(res))
    client.close()
})

const config = require('../config')

module.exports = {
    getCollection
}


// Database Name
const dbName = 'admin';

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




