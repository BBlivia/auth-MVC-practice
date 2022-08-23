const express = require('express')
const router = express.Router()
const todo = require('../models/todoTask')

const editController = require('../controller/edit')
const homeController = require('../controller/home')




router.get('/todoTasks', homeController.getIndex)
router.post('/todoTasks', homeController.createTask)

router.get('/:id', editController.getEdit)
router.get('/remove/:id', editController.deleteTask)
router.post('/:id', editController.updateTask)






module.exports = router 