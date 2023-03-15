const client = require('../../db/redisClient');

const CartController = {
    async index(req, res) {
        const products = await CartController.getProducts();

        res.status(200).json(products);
    },

    async store(req, res) {
        let message = 'Le produit a été ajouté';

        res.status(201).json(message);
    },

    async getProducts() {
        return [];
    },
};

module.exports = CartController;
