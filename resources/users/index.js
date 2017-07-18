const express = require('express');
const router = express.Router()
const controller = require('./controller');

var app = express();

router.get('/login', controller.login)

router.route('/signup')
  .get(controller.signup)
  .post(controller.new)

router.get('/:heroes', controller.show)
router.get('/', controller.index)
// router.get('/heroes', controller.find)
module.exports = router;
