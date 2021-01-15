
let products = [];
function getProducts() {
        return products;
}

function createProduct(product) {
        products.push(product);
}

function deleteProduct(id) {
        products = products.filter(product => Number(id) !== product.id);
}

function getProduct(id) {
        const found = products.filter(product => Number(id) === product.id);
        return found.length ? found[0] : {};
}

module.exports = {
        getProduct,
        createProduct,
        deleteProduct,
        getProducts
}