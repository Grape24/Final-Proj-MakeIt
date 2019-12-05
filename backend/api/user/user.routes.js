const express = require('express')
const {requireAuth} = require('../../middlewares/requireAuth.middleware')
const {getUser, getUsers} = require('./user.controller')
const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)


module.exports = router