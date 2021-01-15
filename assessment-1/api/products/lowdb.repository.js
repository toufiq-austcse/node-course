let config = require('../config')
let productModel = config.getDB().get('products');


function getProducts() {
        return productModel.value();
}

function getProductById(id) {
        const found = productModel.filter({ id: Number(id) }).value();
        return found.length ? found[0] : {};
}

function createProduct(product) {
        productModel.push(product).write();
}

function deleteProductById(id) {
        productModel.remove({ id: Number(id) }).write();
}

module.exports = {
        getProducts,
        getProductById,
        createProduct,
        deleteProductById
}