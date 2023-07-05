var express = require('express');
const { alltodo, enterData, singletodo, deletetodo, updatetodo, randomtodo } = require('../controller/todoControll');

var router = express.Router();

router.post('/register',enterData );
router.get('/alltodo',alltodo);
router.get('/alltodo/:id',singletodo);
router.get('/delete/:id',deletetodo);
router.get('/update/:id',updatetodo);
router.get('/random',randomtodo);

 

module.exports = router;
