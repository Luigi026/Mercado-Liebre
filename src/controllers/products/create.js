const { v4: uuidv4 } = require('uuid');
const Product = require('../../data/Product');
const { readJSON, writeJSON } = require('../../data');

module.exports =  (req, res) => {//El body viaja todo lo que yo envio por post del lado del cliente viaja por body
                                // req.body => objeto que se encarga de llevar la informacion del cliente al servidor
    
    const products = readJSON('products.json')   

    const newProduct = new Product(req.body);//instancia  

    products.push(newProduct); 
    //voy a pushear el nuevo producto que me genera la instancia del objeto producto y luego al seer puhseado me guarda un nuevo elemento en el array

    writeJSON(products, 'products.json')//(array, archivo.json), le paso el array que quiero que guarde en el archivo.json
    //usamos las funcion writeJson para guardar(escribir) el producto del array en el archivo.json

    /* console.log(newProduct) */

    return res.redirect('/admin') //Se redirige a la ruta y esa ruta me lleva a renderizar la vista admin
}                               