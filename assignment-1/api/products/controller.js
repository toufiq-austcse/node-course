class ProductController {
        constructor(model) {
                this.productModel = model;
        }

        getProducts() {
                return this.productModel.value();
        }

        createProduct(product) {
                this.productModel.push(product).write();
        }

        deleteProduct(id) {
                this.productModel.remove({ id: Number(id) }).write();
        }

        getProduct(id) {
                const found = this.productModel.filter({ id: Number(id) }).value();
                return found.length ? found[0] : {};
        }
}


module.exports = ProductController;