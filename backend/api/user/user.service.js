
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    add
}

async function query() {
    let collection;
    try{
        collection = await dbService.getCollection('users')
    }catch{
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
        const user = await collection.findOne({"_id":ObjectId(userId)})
        delete user.password
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${userId}`)
        throw err;
    }
}

async function add(user) {
    console.log('add',user)
    const collection = await dbService.getCollection('users')
    console.log(collection)
    try {
        await collection.insert(user);
        console.log('after')
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}


