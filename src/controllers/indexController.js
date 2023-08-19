const { readJSON } = require("../data");//traigo a mi funcion de lectura de json

module.exports = {

    index : (req, res) => {
        res.render('index');
    },
    admin : (req, res) => {

        const products = readJSON('products.json')// voy a leer el productos.json y lo voy a guardar en la variable products
        const categories = readJSON('categories.json')
        res.render('admin', {// aca estoy mandando un array(products) a la vista del administrador
            products,//array
            categories
        });
    }  
      
}