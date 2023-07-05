const mongoose = require('mongoose');

const PostModel = new mongoose.Schema({
    
    id : {type : Number},
    title: {type : String},
    body: {type : String},
    userId: {type : Number},
    tags: [
        {type : String},
        {type : String},
        {type : String}
    ],
    reactions: {type : Number}     
});

const post_model = mongoose.model('post', PostModel);

module.exports = post_model;
