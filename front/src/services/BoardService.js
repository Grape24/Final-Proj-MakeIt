
import HttpService from './HttpService'

export default {
    query,
    remove,
    getById,
    edit,
    add

}

async function query() {
    try {
        const boards = await HttpService.get('board/')
        return boards
    }
    catch (err) {
        console.log(err)
    }
}

async function edit(board) {
    try {
        const updatedBoard = await HttpService.put(`board/${board._id}`, board)
        return updatedBoard
    }
    catch (err) {
        console.log(err)
    }
}

async function getById(id) {
    try {
        const board = await HttpService.get(`board/${id}`)
        return board
    }
    catch (err) {
        console.log(err)
    }

}

async function remove(boardId) {
    try {
        await HttpService.delete(`board/${boardId}`, boardId)
    }
    catch (err) {
        console.log(err)
    }

}

async function add(board) {
    try {
        const updatedBoards = await HttpService.post('board/', board)
        return updatedBoards
    }
    catch (err) {
        console.log(err)
    }

}




