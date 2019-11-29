import axios from 'axios'
axios.defaults.withCredentials = true

export default {
    query,
    add,
    remove,
    getById,
    edit,

}

const BASE_URL = (process.env.NODE_ENV !== 'development') ?
    '/api/toy' :
    '//localhost:3000/boards';



async function query() {
    const res = await axios.get(BASE_URL)
    return res.data
}

function add(board) {
    console.log('mama', board)
    // return axios.post(BASE_URL, board)
    // .then(res => res.data)
}


function edit(board) {
    return axios.put(`${BASE_URL}/${board._id}`, board)
}


function remove(boardId) {
    return axios.delete(`${BASE_URL}/${boardId}`)
}

async function getById(id) {
    const board = await axios.get(`${BASE_URL}/${id}`)
    return board.data
}
