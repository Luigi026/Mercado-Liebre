const express = require('express');
const { detail, add, create, edit, update, remove } = require('../controllers/productsController');
const productAddValidator = require('../validations/productAddValidator');
const upload = require("../middlewares/upload");
/* const productsEditValidator = require("../validations/productsEditValidator"); */
/* const adminCheck = require("../middlewares/adminCheck"); */

const router = express.Router();

/*  /products */

router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', upload.single('image'), productAddValidator, create)      // En la ruta siempre va primero MULTER y luego el VALIDADOR


    .get('/edit/:id', edit)
    .put('/update/:id', update)
    .delete('/remove/:id', remove)

module.exports = router;

//para usar el metodo put, patch y delete, se necesita instalar una dependencia de "npm install override"