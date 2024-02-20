const router = require('express').Router();
const {updateProduct,deleteProduct,getProducts,getProduct, createProduct} = require('../controllers/product.controller');
router.get('/',getProducts);
router.post('/',createProduct)
router.get('/:id',getProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct)
module.exports = router;