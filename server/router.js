const express = require('express')

const userRouter = require('./routes/user')
const itemRouter = require('./routes/item')

const router = express.Router()


router.use('/user', userRouter)
router.use('/item', itemRouter)

module.exports = router