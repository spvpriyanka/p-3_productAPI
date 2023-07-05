var express = require('express');
const { allcart, singlecart, enterData, deletecart, updatecart } = require('../controller/cartControll');

var router = express.Router();

router.post('/register',enterData );
router.get('/allcart',allcart);
router.get('/allcart/:id',singlecart);
router.get('/delete/:id',deletecart);
router.get('/update/:id',updatecart);
 

module.exports = router;
