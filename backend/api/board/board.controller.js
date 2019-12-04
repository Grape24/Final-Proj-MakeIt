const boardService = require('./board.service')

async function getBoard(req, res) {
    const board = await boardService.getById(req.params.id)
    res.send(board)
}

async function getBoards(req, res) {
    const boards = await boardService.query(req.query)
    res.send(boards)
}

async function deleteBoard(req, res) {
    await boardService.remove(req.params.id)
    res.send()
}

async function update(req, res) {
    const board = await boardService.update(req.body)
    res.send(board)
}

async function add(req, res) {
    const board = await boardService.add(req.body)
    res.send(board)
}

async function updateBoards(req, res) {
    const boards = await boardService.updateBoards(req.body)
    res.send(boards)
}

module.exports = {
    getBoard,
    getBoards,
    deleteBoard,
    update,
    add,
    updateBoards
}