var express = require('express');
const { allpost, singlepost, deletepost, updatepost, enterData, searchposts, limit_skippost, postuserId, postcommentId } = require('../controller/postControll');

var router = express.Router();

router.post('/register',enterData );
router.get('/allpost',allpost);
router.get('/allpost/:id',singlepost);
router.get('/delete/:id',deletepost);
router.get('/update/:id',updatepost);
router.get('/search',searchposts);
router.get('/limit_skip',limit_skippost);
router.get('/user/:id',postuserId);
router.get('/post/:id',postcommentId);
 

module.exports = router;
