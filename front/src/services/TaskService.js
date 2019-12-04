import BoardService from './BoardService.js'


export default {
    remove,
    getTaskById,
    add,
    edit
}

async function remove(boardId, taskId, topicName) {
    let board = await BoardService.getById(boardId)
    let task = await getTaskById(boardId, taskId)
    board.topicTasksMap[topicName] = board.topicTasksMap[topicName].filter(task => task.id !== taskId)
    board.activites.push({
        task: task.title,
        activity: 'removed',
        inTopic: topicName,
        DoneAt: Date.now()
    }
    )
    board = await BoardService.edit(board)
    return board
}

async function edit(boardId, task, topicName) {
    let board = await BoardService.getById(boardId)
    let idx = board.topicTasksMap[topicName].findIndex(todo => todo.id === task.id)
    board.activites.push({
        task: task.title,
        activity: 'updated',
        inTopic: topicName,
        DoneAt: Date.now()
    })
    board.topicTasksMap[topicName].splice(idx, 1, task)
    return board
}

async function getTaskById(boardId, taskId) {
    const board = await BoardService.getById(boardId);
    const mat = Object.values(board.topicTasksMap);
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            let task = (mat[i][j])
            if (task.id === taskId) {
                return task
            }
        }
    }
}

async function add(boardId, task, topicName) {
    let board = await BoardService.getById(boardId)
    task.id = _makeId()
    task.createdById = null
    board.topicTasksMap[topicName].push(task)
    board.activites.push({
        task: task.title,
        activity: 'added',
        inTopic: topicName,
        DoneAt: Date.now()
    })
    let newBoard = await BoardService.edit(board)
    return newBoard
}


function _makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
