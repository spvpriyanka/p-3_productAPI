const mongoose = require('mongoose');

const CommentModel = new mongoose.Schema({

    id: { type: Number },
    body: { type: String },
    postId: { type: Number },
    user: {

        id: { type: String },
        username: { type: String },

    },
});

const comment_model = mongoose.model('comment', CommentModel);

module.exports = comment_model;
