const express = require('express');
const router = express.Router()
const controller = require('./controller');

// var app = express();

router.get('/', controller.index)
router.get('/user_id/:hero_id', controller.show)


module.exports = router;


// router.get('/character', conteroller.index)
