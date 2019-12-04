
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    add,
    getByEmail
}

async function query() {
    let collection;
    try {
        collection = await dbService.getCollection('users')
    } catch{
        console.log(err)
    }
    try {
        const users = await collection.find().toArray();
        users.forEach(user => delete user.password);

        return users
    } catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }
}

async function getById(userId) {
    const collection = await dbService.getCollection('users')
    try {
        const user = await collection.findOne({ "_id": ObjectId(userId) })
        delete user.password
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${userId}`)
        throw err;
    }
}

async function add(user) {
    const collection = await dbService.getCollection('users')
    try {
        await collection.insertOne(user);
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

async function getByEmail(email) {
    const collection = await dbService.getCollection('users')
    try {
        const user = await collection.findOne({ email })
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${email}`)
        throw err;
    }
}

