var express = require('express');
const { login, register } = require('../controllers/users');
var router = express.Router();

/* GET users listing. */

router.get('/', login);
router.get('/', register);

module.exports = router;
