
import HttpService from './HttpService'

export default {
    query,
    remove,
    getById,
    edit,

}

async function query() {
    const boards = await HttpService.get('/')
    return boards
}

async function edit(board) {
    const updatedBoard = await HttpService.put(`/${board.id}`, board)
    return updatedBoard
}
<<<<<<< HEAD
async function getById(id) {
    const board = await HttpService.get(`/${id}`)
    return board
=======

 async function addTopic(topic,board){
    board.topicTasksMap[topic]=[]
    const newBoard = await edit(board)
    return newBoard.data

}

function edit(board) {
    return axios.put(`${BASE_URL}/${board._id}`, board)
>>>>>>> 376b37f3d489c84075c8d73206b1c96eadc42e1a
}

async function remove(boardId) {
    await HttpService.delete(boardId)

}




