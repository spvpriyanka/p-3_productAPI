const mongoose = require('mongoose');

const TodoModel = new mongoose.Schema({
    
    id : {type : Number},
    todo: {type : String},
    completed: {type : String},
    userId: {type : Number},   
});

const todo_model = mongoose.model('todos', TodoModel);

module.exports = todo_model;
