import axios from 'axios'
axios.defaults.withCredentials = true

export default {
    query,
    add,
    remove,
    getById,

}

const BASE_URL = (process.env.NODE_ENV !== 'development') ?
    '/api/toy' :
    '//localhost:3000/boards';


function query() {
    return axios.get(BASE_URL).then(res => {
        return res.data;
    });
}

function add(board) {
    return axios.post(BASE_URL, board)
        .then(res => res.data)
}

function remove(boardId) {
    return axios.delete(`${BASE_URL}/${boardId}`)
}

function getById(id) {
    return axios.get(`${BASE_URL}/${id}`)
        .then(board => {
            return board.data
        })
}

