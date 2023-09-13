const { check, body } = require('express-validator')
// check : define las validaciones en una ruta especifica que se envian por las solicitudes HTTP

module.exports = [

// Ejecutamos el metodo check para validar cada elemnto el cual le pasamos por parametro el valor del atributo name del elemento que queremos validar
    check('title')
        .notEmpty()
        .withMessage('El titulo es obligatorio')         // con el metodo notEmpty checkeamos que no este vacio
        .bail()                                             
        .isLength({
            min : 4,
            max : 50
        }).withMessage('Debe de tener entre 4 y 20 caracteres'),
// dato: lo que va entre parentesis es el valor del atributo name del input
    check('category')
        .notEmpty()
        .withMessage('El categoria es requerida'),
    
    check('section')
        .notEmpty().withMessage('La seccion es requerida'),
    

    check('price')
        .notEmpty()
        .withMessage('El precio es obligatorio')
        .isInt({
            gt : 1
        }).withMessage('El precio debe de ser positivo'),   

    check('description')
        .isLength({
            min : 20,
            max : 500
        }).withMessage('Debe tener entre 20 y 500 caracteres'),
  //Uso el metodo custom donde recibe el valor del metodo donde se hace la validacion de custom, y como segundo parametro un destrecturing del request
  //donde el callback recibe la logica de que Si viene algo por file entonces ingresa de lo contrario no ingresa  
  // el mensaje de false seria : "Debe de subir una imagen principal" 
   /*  body('ímage')
        .custom((value,{req}) => {
            if(req.files.image){ //SI existe image dentro de files entonces adelante(true)
                return true
            }
            return false
        }).withMessage('Debe de subir una imagen principal')     */
    ];
          


// En resumen : empezamos exportando un array donde usamos el metodo check de express-validator donde hacemos referencia al nombre del campo que queremos validar y hacemos referencia al valor del atributo name del INPUT
// Luego a este array lo implementamos como middleware de ruta, ¿en que ruta? -> en la ruta que recibe los datos del formulario (.post('/add', productValidator, create)) ¡importante, no va ejecutado!