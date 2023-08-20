const express = require('express');
const { detail, add, create, edit, update } = require('../controllers/productsController');

const router = express.Router();

/*  /products */

router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', create)
    .get('/edit/:id', edit)
    .put('/update/:id', update)

module.exports = router;

//para usar el metodo put, patch y delete, se necesita instalar una dependencia de "npm install override"