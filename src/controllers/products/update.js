const { readJSON, writeJSON } = require("../../data")

module.exports = (req, res) => {
    
    const { title, price, category, discount, description } = req.body;

    const products = readJSON('products.json');

    const productsModify = products.map(product => {
//estoy recibiendo informacion y metodos desde el formulario por el metodo http POST
//Voy a aplicar un destructuring de TITLE, PRICE, CATEGORY, DISCOUNT, DESCRIPTION
//Voy a traerme los productos por medio de readJSON del archivo products.json
//Voy a hacer una constante pModify es igual a el array de products recorrido
//con map y quiero que retorne el producto que si el producto es estrictamente 
//igual al id que recibo por parametro entonces quiero que el
//prodcuto.title sea igual al title trimeado y asi con todos sus ppropiedades

        if(product.id ==req.params.id){
            product.title = title.trim()
            product.description = description.trim()
            product.price = +price
            product.discount = +discount
            product.category = category
        }
        return product
    })
    writeJSON(productsModify, 'products.json')
    /* return */ res.redirect('/admin') 
    //voy a llamar a writeJSON para que modifique en el archivo product.json
}

