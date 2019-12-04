
import HttpService from './HttpService'

export default {
    query,
    remove,
    getById,
    edit,

}

async function query() {
    
    const boards = await HttpService.get('board/')
    return boards
}

async function edit(board) {
    const updatedBoard = await HttpService.put(`board/${board.id}`, board)
    return updatedBoard
}
async function getById(id) {
    const board = await HttpService.get(`board/${id}`)
    return board
}

async function remove(boardId) {
    await HttpService.delete('board/', boardId)

}




