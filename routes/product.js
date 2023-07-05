var express = require('express');
const { enterData, allProducts, singleproduct, productallcategories, categories, deleteproducts, updateproducts, searchproducts, limit_skipuser } = require('../controller/productcontroller');

var router = express.Router();

router.post('/register', enterData);
router.get('/allproduct',allProducts);
router.get('/allproduct/:id',singleproduct);
router.get('/categories',productallcategories);
router.get('/categories/:id',categories);
router.get('/search',searchproducts);
router.get('/limit_skip',limit_skipuser);
router.get('/delete/:id',deleteproducts);
router.get('/update/:id',updateproducts);


module.exports = router;