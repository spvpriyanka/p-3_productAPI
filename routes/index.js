var express = require('express');
const { enterData, userLogin, allUsers, singleData, limit_skipuser, deleteuser, updateuser, searchusers, todouserId, postuserId, cartuserId } = require('../controller/userControl');
const { userAuth } = require('../middleware/auth');
var router = express.Router();

/* GET home page. */
router.post('/register', enterData);
router.get('/',userLogin);
router.get('/users',userAuth, allUsers);
router.get('/users/:id',singleData);
router.get('/search',searchusers);
router.get('/limit_skip',limit_skipuser);
router.get('/delete/:id',deleteuser);
router.get('/update/:id',updateuser);
router.get('/user/:id/todos',todouserId);
router.get('/user/:id/post',postuserId);
router.get('/user/:id/cart',cartuserId);


module.exports = router;
