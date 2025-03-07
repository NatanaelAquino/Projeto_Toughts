const express = require('express')
const router = express.Router()
const ToughtsController = require('../controller/ToughtsController')

router.get('/', ToughtsController.showToughts)

module.exports = router