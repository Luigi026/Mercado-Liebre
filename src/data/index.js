const { readFileSync, writeFileSync } = require('fs');
const path = require('path');


module.exports = {
    readJSON : (file) => { //tengo un metodo que recibe un JSON, lo lee con readfilesync y lo retorna parseado
        return JSON.parse(readFileSync(path.join(__dirname, file), 'utf-8'))
    },
    writeJSON : (array, file) => {//
        writeFileSync(path.join(__dirname, file), JSON.stringify(array, null, 3), 'utf-8')
        return null
    } //primero es donde lo quiero guardar, luego que quiero guardar y como lo quiero guardar 
}