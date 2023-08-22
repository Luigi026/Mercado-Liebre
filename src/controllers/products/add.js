const { readJSON } = require("../../data")

module.exports = (req, res) => {

        const categories = readJSON('categories.json')//leo las categorias del archivo json 
        const sections = readJSON('sections.json')
        return res.render('productAdd', {//envia a la vista las categrias leidas 
            categories,
            sections : sections.sort()
        })
    }
