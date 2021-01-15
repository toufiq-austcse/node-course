const express = require('express');
const router = express.Router();
const products = require('./products');
const config = require('./config');

router.use(products.config.ENDPOINT, products.route);

module.exports = {
        config,
        route:router
};