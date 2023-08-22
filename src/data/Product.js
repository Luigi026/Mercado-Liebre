const { v4: uuidv4 } = require('uuid');

const Product = function ({title, category, price, discount ,description, section, image}) {

    this.id = uuidv4();
    this.title = title.trim();
    this.category = category;
    this.price = +price;
    this.discount = +discount;
    this.description = description.trim();
    this.image = null
    this.section = section
    this.createaAt = new Date
}

module.exports = Product