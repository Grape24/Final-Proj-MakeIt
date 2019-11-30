import BoardService from './BoardService.js'


export default {
    remove,
<<<<<<< HEAD
=======
    getTaskById,
    add,
>>>>>>> 925daaae11f92754876b7938a88b940faf73af72
    edit
}


async function remove(boardId, taskId, topicName) {
    let board = await BoardService.getById(boardId)
    board.topicTasksMap[topicName] = board.topicTasksMap[topicName].filter(task => task.id !== taskId)
    board = await BoardService.edit(board)
    return board.data
}

<<<<<<< HEAD
async function edit (currTask,currBoard,topicName){
    console.log('currTask',currTask)
    currBoard.topicTasksMap[topicName] = currBoard.topicTasksMap[topicName].map(task => {
        if(task.id===currTask.id){
            task=currTask
        }
        
    });
    console.log('servi',currBoard)
    BoardService.edit(currboard)

}

=======
async function edit(boardId, task, topicName) {
    let board = await BoardService.getById(boardId)
    let idx = board.topicTasksMap[topicName].findIndex(todo => todo.id === task.id)
    board.topicTasksMap[topicName].splice(idx, 1, task)
    return board
}   

async function getTaskById(boardId, taskId) {
    const board = await BoardService.getById(boardId);
    const mat = Object.values(board.topicTasksMap);
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            let task = (mat[i][j])
            if (task.id === taskId) return task
        }
    }
}

async function add(boardId, task, topicName) {
    let board = await BoardService.getById(boardId)
    task.id = _makeId()
    task.createdById = null
    board.topicTasksMap[topicName].push(task)
    board = await BoardService.edit(board)
    return board.data
}


function _makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
>>>>>>> 925daaae11f92754876b7938a88b940faf73af72
