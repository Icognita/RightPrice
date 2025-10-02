const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');



router.post('/register', productController.registerProduct);
router.post('/scan', productController.scanProduct);

module.exports = router;
