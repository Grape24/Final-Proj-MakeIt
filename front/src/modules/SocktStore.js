import socket from '../services/SocketService.js'

export default {
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        updateBoard(context, { board }) {
            socket.emit('updateBoard', board)
        },
        getBoard(context, { boardId }) {
            socket.emit('getBoard', boardId)
        }
    }
}