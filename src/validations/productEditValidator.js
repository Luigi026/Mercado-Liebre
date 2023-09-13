const { check } = require('express-validator')
// check : define las validaciones en una ruta especifica que se envian por las solicitudes HTTP

module.exports = [

// Ejecutamos el metodo check para validar cada elemnto el cual le pasamos por parametro el valor del atributo name del elemento que queremos validar
    check('title')
        .notEmpty().withMessage('El titulo es obligatorio').bail()  // con el metodo notEmpty checkeamos que no este vacio
        .isLength({
            min : 4,
            max : 20
        }).withMessage('Debe de tener entre 4 y 20 caracteres'),

    check('price')
        .notEmpty().withMessage('El precio es obligatorio')
        .isInt({
            gt : 1
        }).withMessage('El precio debe de ser positivo'),   

    check('description')
        .isLength({
            min : 20,
            max : 500
        }).withMessage('Debe tener entre 20 y 500 caracteres')    
    ]