const { readJSON } = require("../../data")

module.exports =  (req, res) => {

    const products = readJSON('products.json');

    const product = products.find(product => product.id === req.params.id)//req.params.id = id que viene por parametro
        
        return res.render('productDetail', {
            ...product //coloco los "..." para mandar los valores y propiedades aplicando destructuring
        })
    }

    //Me traigo la lectura del json con readJSON y lo guardo en la variale prroducts
    //Luego recorro el array de prodyuctos con find donde cada elemento es un producto y que cuyo id sea estrictamente igual al id que viene por parametro
    //entonces ese es el producto que luego voy a mostrar(render) en la vista 