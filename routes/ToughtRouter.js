const express = require('express')
const router = express.Router()
const ToughtsController = require('../controller/ToughtsController')

// helpers 

const checkAuth = require('../helpers/auth').checkAuth

router.get('/add',checkAuth, ToughtsController.createToughts)
router.post('/add',checkAuth, ToughtsController.createToughtsPost)

router.get('/edit/:id',checkAuth, ToughtsController.updadteTought)
router.post('/edit/',checkAuth, ToughtsController.updadteToughtSave)

router.get('/comments/:id',checkAuth, ToughtsController.comments)
router.post('/comments/',checkAuth, ToughtsController.commentsPost)
router.post('/like/',checkAuth, ToughtsController.like)

router.get('/dashboard',checkAuth, ToughtsController.dashboard)
router.post('/remove',checkAuth, ToughtsController.removeTought)

router.get('/', ToughtsController.showToughts)


module.exports = router