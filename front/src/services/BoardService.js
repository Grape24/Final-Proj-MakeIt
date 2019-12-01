import axios from 'axios'
axios.defaults.withCredentials = true

export default {
    query,
    add,
    remove,
    getById,
    edit,
    addTopic,
    removeList,
    
}

const BASE_URL = (process.env.NODE_ENV !== 'development') ?
    '/api/toy' :
    '//localhost:3000/boards';



async function query() {
    const res = await axios.get(BASE_URL)
    return res.data
}

function add(board) {
    
    // return axios.post(BASE_URL, board)
    // .then(res => res.data)
}

 async function addTopic(topic,board){
    board.topicTasksMap[topic]=[]
    const newBoard = await edit(board)
    return newBoard.data

}

// async function changeTopic(newTopic,oldTopic,board){
//     const topic = JSON.parse(JSON.stringify(board.topicTasksMap[oldTopic]))
//     console.log(topic)
//     board.topicTasksMap[newTopic]=topic
//     delete board.topicTasksMap[oldTopic]
//     const newBoard =await edit(board)
//     console.log(newBoard.data)
//     return newBoard.data


    


// }

function edit(board) {
    return axios.put(`${BASE_URL}/${board._id}`, board)
}


function remove(boardId) {
    return axios.delete(`${BASE_URL}/${boardId}`)
}

async function removeList(topic,board){
    delete board.topicTasksMap[topic]
    const newBoard = await edit(board)
    return newBoard.data
}


function getById(id) {
    return axios.get(`${BASE_URL}/${id}`)
        .then(board => {
            return board.data
        })
}

function getTaskById(boardId, taskId) {
    return getById(boardId)
        .then(board => {
            const mat = Object.values(board.topicTasksMap)
            console.log('mat',mat)
            for (let i = 0; i < mat.length; i++) {
                for (let j = 0; j < mat[i].length; j++) {
                    let task = (mat[i][j])
                    if (task.id === taskId) return task
                }
            }
        })


async function getById(id) {
    const board = await axios.get(`${BASE_URL}/${id}`)
    return board.data
}
}