const client = require('../../db/redisClient');

const ProductsController = {
    async index(req, res) {
        // ici envoie la réponse avec les products
        const products = await ProductsController.getProducts();

        res.status(200).json(products);
    },

    async store(req, res) {
        const products = [];
        return res.status(201).json(products);
    },

    async show(req, res) {
        const { id } = req.params;

        const prod = {};

        res.status(200).json(prod);
    },

    async getProducts() {
        return [];
    },
};

module.exports = ProductsController;
