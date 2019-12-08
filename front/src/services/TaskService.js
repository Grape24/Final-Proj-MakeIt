import BoardService from './BoardService.js'


export default {
    remove,
    add,
    edit
}

async function remove(boardId, taskId, topic) {
    let board = await BoardService.getById(boardId)
    const task = board.topicTasksMap[topic].find(task => task.id === taskId)
    var user = (sessionStorage.user) ? JSON.parse(sessionStorage.user) : { username: 'guest' }
    board.topicTasksMap[topic] = board.topicTasksMap[topic].filter(task => task.id !== taskId)
    board.activites.push({
        task: task.title,
        activity: 'removed',
        inTopic: topic,
        DoneAt: Date.now(),
        by: user.username
    }
    )
    board = await BoardService.edit(board)
    return board
}

async function edit(boardId, task, topic) {
    let board = await BoardService.getById(boardId)
    var user = (sessionStorage.user) ? JSON.parse(sessionStorage.user) : { username: 'guest' }
    let idx = board.topicTasksMap[topic].findIndex(todo => todo.id === task.id)
    board.activites.push({
        task: task.title,
        activity: 'updated',
        inTopic: topic,
        DoneAt: Date.now(),
        by: user.username
    })
    board.topicTasksMap[topic].splice(idx, 1, task)
    return board
}

// async function save(board) {
async function add(boardId, task, topicName) {
    let board = await BoardService.getById(boardId)
    task.id = _makeId()
    task.createdById = null
    var user = (sessionStorage.user) ? JSON.parse(sessionStorage.user) : { username: 'guest' }
    board.topicTasksMap[topicName].push(task)
    board.activites.push({
        task: task.title,
        activity: 'added',
        inTopic: topicName,
        DoneAt: Date.now(),
        by: user.username
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
