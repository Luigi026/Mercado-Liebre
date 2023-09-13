const { validationResult } = require('express-validator')
const { v4: uuidv4 } = require('uuid');
const Product = require('../../data/Product');
const { readJSON, writeJSON } = require('../../data');
const {unlinkSync, existsSync} = require('fs');

module.exports =  (req, res) => {//El body viaja todo lo que yo envio por post del lado del cliente viaja por body
                                // req.body => objeto que se encarga de llevar la informacion del cliente al servidor 
   /* Validaciones */ 

    const errors = validationResult(req);                           // errors : va a guardar informacion de la ejecucion del metodovalidationResult que es el metodo al cual le pasamos como parametro el request
    /* return res.send(errors.mapped()); */
    if(errors.isEmpty()){                                            //Si los errores estan vacios
        const products = readJSON('products.json')               // de esta forma me traigo los productos y leo el archivo.json
        const data = {
            ...req.body,
            image : req.file ? req.file.filename : null
        }                                                        
        const newProduct = new Product(data);                       //creo una nueva instancia de producto
                                                                      //Todo lo que se manda por POST se recibe en el request con su propiedad body que es un objeto que se conforma de todas las propiedades que se crean apartir de los datos provenientes del formulario
        products.push(newProduct);                                   //pusheo esa instancia
                                                                 //voy a pushear el nuevo producto que me genera la instancia del objeto producto y luego al ser puhseado me guarda un nuevo elemento en el array
        writeJSON(products, 'products.json')                    //(array, archivo.json), le paso el array que quiero que guarde en el archivo.json
                                                                 //usamos las funcion writeJson para guardar(escribir) el producto del array en el archivo.json
        return res.redirect('/admin')                                                           //le paso el array products que quiero que guarde que fue modificado en New product y writeJSON se encarga de guardarlo en el archivo productos.json
    }else {                                                         /* console.log(newProduct) */

        const categories = readJSON('categories.json')              //Se redirige a la ruta y esa ruta me lleva a renderizar la vista admin
        const sections = readJSON('sections.json')                   // se coloca ruta, no vistas(me redirige a la ruta y esa rutame renderiza admin)
        
        (req.files.image && existsSync(`./public/images/${req.files.image[0].filename }`)) && unlinkSync(`./public/images/${req.files.image[0].filename }`);
                        
        if(req.files.images){                                       //SI es que existe el archivo images recorro con foreach y en cada iteracion lo voy eliminando
            req.files.images.forEach(file => {
                existsSync(`./public/images/${file.filename}`) && unlinkSync(`./public/images/${file.filename}`)
            });
        }
        return res.render('productAdd',{
            categories,
            sections : sections.sort(),
            errors : errors.mapped(),
            old : req.body
                                                                //tengo que vovlver a traerme las categorias y las secciones antes de retornar la vista como si los huiese rendeerizado por primera vez
        })
    }
}                               