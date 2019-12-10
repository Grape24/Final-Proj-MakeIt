import BoardService from './BoardService.js'
import store from '../store/index'


export default {
    remove,
    add,
    edit
}

async function remove(boardId, taskId, topic) {
    try {
        let board = await BoardService.getById(boardId)
        const task = board.topicTasksMap[topic].find(task => task.id === taskId)
        var user = (store.store.getters.loggedinUser) ? store.store.getters.loggedinUser : { username: 'guest' }
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
    catch (err) {
        console.log(err)
    }

}

async function edit(boardId, task, topic) {
    try {
        let board = await BoardService.getById(boardId)
        var user = (store.store.getters.loggedinUser) ? store.store.getters.loggedinUser : { username: 'guest' }
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
    catch (err) {
        console.log(err)
    }

}

async function add(boardId, task, topicName) {
    try {
        var user = (store.store.getters.loggedinUser) ? store.store.getters.loggedinUser : { username: 'guest' }
        let board = await BoardService.getById(boardId)
        task.id = _makeId()
        task.createdById = null
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
    catch (err) {
        console.log(err)
    }
}


function _makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
