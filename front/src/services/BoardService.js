
import HttpService from './HttpService'

export default {
    query,
    remove,
    getById,
    edit,
<<<<<<< HEAD
=======
    add

>>>>>>> 99e6820c82326d056897b5d322aa013ee7d1dfb3
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

async function add(board) {
    const updatedBoards = await HttpService.post('/', board)
    return updatedBoards
}




