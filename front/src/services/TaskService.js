import BoardService from './BoardService.js'


export default {
    remove,
    edit
}


async function remove(boardId, taskId, topicName) {
    let board = await BoardService.getById(boardId)
    board.topicTasksMap[topicName] = board.topicTasksMap[topicName].filter(task => task.id !== taskId)
    BoardService.edit(board)
}

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

