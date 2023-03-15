const express = require('express');
const router = express.Router();
const appController = require('./controllers/appController');
const CategoriesController = require('./controllers/CategoriesController');
const ProductsController = require('./controllers/ProductsContolller');
const CartController = require('./controllers/CartController');

router.get('/', appController.index);

/**
 * @route GET /products
 * Retourne une liste de ressources
 */
router.get('/products', ProductsController.index);

/**
 * @route POST /products/create
 * Créé une ressource
 */
router.post('/products/create', ProductsController.store);

/**
 * @route GET /products/:id
 * @param id product title
 * returns a resource
 */
router.get('/products/:id', ProductsController.show);
/**
 * @route GET /categories
 * Afficher les catégories
 */
router.get('/categories', CategoriesController.index);
/**
 * @route POST /categories/create
 * Créér une catégorie
 */
router.post('/categories/create', CategoriesController.store);

router.get('/cart', CartController.index);

router.post('/cart/add', CartController.store);

module.exports = router;
