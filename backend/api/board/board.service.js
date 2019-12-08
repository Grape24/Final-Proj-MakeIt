
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add,
    updateBoards
}


async function updateBoards(board) {
    const collection = await dbService.getCollection('boards')
    try {
        const updateBoards = await collection.insertOne(board)
        return updateBoards
    }
    catch (err) {
        throw err

    }

}

async function query() {
    const collection = await dbService.getCollection('boards')
    try {
        const boards = await collection.find().toArray();
        return boards
    } catch (err) {
        throw err;
    }
}

async function getById(boardId) {
    const collection = await dbService.getCollection('boards')
    try {
        const board = await collection.findOne({ "_id": ObjectId(boardId) })
        return board
    } catch (err) {
        throw err;
    }
}


async function remove(boardId) {
    const collection = await dbService.getCollection('boards')
    try {
        const boards = await collection.deleteOne({ "_id": ObjectId(boardId) })
    } catch (err) {
        throw err;
    }
}

async function update(board) {
    const collection = await dbService.getCollection('boards')
    try {
        board._id = ObjectId(board._id)
        await collection.replaceOne({ "_id": ObjectId(board._id) }, { $set: board })
        return board
    } catch (err) {
        throw err;
    }
}

async function add(board) {
    const collection = await dbService.getCollection('boards')
    try {
        await collection.insertOne(board);
        return board;
    } catch (err) {
        throw err;
    }
}



