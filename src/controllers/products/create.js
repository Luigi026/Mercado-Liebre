const { v4: uuidv4 } = require('uuid');
const Product = require('../../data/Product');
const { readJSON, writeJSON } = require('../../data');

module.exports =  (req, res) => {//El body viaja todo lo que yo envio por post del lado del cliente viaja por body
                                // req.body => objeto que se encarga de llevar la informacion del cliente al servidor
    
    const products = readJSON('products.json')// de esta forma me traigo los productos y leo el archivo.json

    const newProduct = new Product(req.body);//instancia  

    products.push(newProduct); 
    //voy a pushear el nuevo producto que me genera la instancia del objeto producto y luego al ser puhseado me guarda un nuevo elemento en el array

    writeJSON(products, 'products.json')//(array, archivo.json), le paso el array que quiero que guarde en el archivo.json
    //usamos las funcion writeJson para guardar(escribir) el producto del array en el archivo.json
//le paso el array products que quiero que guarde que fue modificado en New product y writeJSON se encarga de guardarlo en el archivo productos.json
    /* console.log(newProduct) */

    return res.redirect('/admin') //Se redirige a la ruta y esa ruta me lleva a renderizar la vista admin
    // se coloca ruta, no vistas(me redirige a la ruta y esa rutame renderiza admin)
}                               