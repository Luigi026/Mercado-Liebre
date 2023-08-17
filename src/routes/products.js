const express = require('express');
const { detail } = require('../controllers/productsController');

const router = express.Router();

/*  /products */

router.get('/detail/:id?', detail)

module.exports = router;