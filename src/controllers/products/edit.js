const { readJSON } = require("../../data")

module.exports = (req, res) => {

        const categories = readJSON('categories.json');
        const products = readJSON('products.json');
        const sections = readJSON('sections.json');
        //me traigo los productos de product.json
        const id = req.params.id;
//traigo el ID con req.params.id
        const product = products.find(product => product.id === id)
//busco con find en products y que devuelva el prodcuto cuyo id sea estrictamente igual al id 
        return res.render('productEdit', {
            categories,
            sections,
            ...product // "..." con los 3 puntos se manda de forma desestructurada
        })
    }