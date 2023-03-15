const client = require('../../db/redisClient');

const CategoriesController = {
    async index(req, res) {
        // ici envoie la réponse avec les catégories
        const categories = await CategoriesController.getCategories();

        res.status(200).json(categories);
    },

    async store(req, res) {
        const { name } = req.body;

        res.status(400).json({
            message: `Nous n'avons pas pu créér la catégorie ${name}`,
        });
    },

    async getCategories() {
        return [];
    },
};

module.exports = CategoriesController;
