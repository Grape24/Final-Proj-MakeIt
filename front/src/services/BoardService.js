// import axios from 'axios'
// axios.defaults.withCredentials=true

export default {
    query,
    add,
    remove,
    getById,
    edit
}

const BASE_URL = (process.env.NODE_ENV !== 'development') ?
    '/api/toy' :
    '//localhost:3000/boards';


function query() {
    return axios.get(BASE_URL).then(res => {
        return res.data;
    });
}

function add(toy) {
    return axios.post(BASE_URL, toy)
        .then(res => res.data)
}

function remove(todoId) {
    return axios.delete(`${BASE_URL}/${todoId}`)
}

function getById(id) {
    return axios.get(`${BASE_URL}/${id}`)
        .then(toys => {
            return toys.data
        })
}

function edit(toyToEdit) {
    return axios.put(`${BASE_URL}/${toyToEdit.toy.id}`, toyToEdit.toy)
}