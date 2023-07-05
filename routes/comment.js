var express = require('express');
const { allcomment, singlecomment, enterData, deletecomment, updatecomment, limit_skipcomment, postId } = require('../controller/commentcontroll');

var router = express.Router();

router.post('/register',enterData );
router.get('/allcomment',allcomment);
router.get('/allcomment/:id',singlecomment);
router.get('/delete/:id',deletecomment);
router.get('/update/:id',updatecomment);
router.get('/limit_skip',limit_skipcomment);
router.get('/post/:id',postId);
 

module.exports = router;
