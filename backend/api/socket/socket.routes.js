module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on('load board', board => {
            socket.join(board)
            socket.board = board
            io.to(socket.board).emit('board loaded', board)
        })
        socket.on('update board', board => {
            console.log(board)
            io.to(socket.board).emit('board updated', board)
        })
    })
}
