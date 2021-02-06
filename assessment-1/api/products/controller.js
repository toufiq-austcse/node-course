let productRepository = require('./lowdb.repository');

function getProducts() {
        return productRepository.getProducts();
}

function getProduct(id) {
        return productRepository.getProductById(id);
}

function createProduct(product) {
        return productRepository.createProduct(product);
}

function deleteProduct(id) {
        return productRepository.deleteProductById(id)
}

module.exports = {
        getProduct,
        getProducts,
        createProduct,
        deleteProduct,
};
