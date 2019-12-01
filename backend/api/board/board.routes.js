const express = require('express')
const { getBoard, getBoards, deleteBoard, update, add } = require('./board.controller')
const router = express.Router()



router.get('/', getBoards)
router.get('/:id', getBoard)
router.delete('/:id', deleteBoard)
router.put('/:id', update)
router.post('/', add)

module.exports = router

