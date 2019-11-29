import BoardService from './BoardService.js'


export default {
    remove
}


async function remove(boardId, taskId, topicName) {
    let board = await BoardService.getById(boardId)
    board.topicTasksMap[topicName] = board.topicTasksMap[topicName].filter(task => task.id !== taskId)
    BoardService.edit(board)
}

