const { readJSON, writeJSON } = require("../../data")

module.exports = (req, res) => {
    const products = readJSON('products.json');

    const productsModify = products.filter(product => product.id !== req.params.id)
//voy a recorrer con filter donde cada elemento es un producto, donde cuyo id sea distinto al id que recibo por parametro.
    writeJSON(productsModify, 'products.json')
//lo quiero guardar en products.json 
    res.redirect('/admin')
//y enviarlo a admin
}