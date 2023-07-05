const mongoose = require('mongoose');

const productmodel = new mongoose.Schema({
    id : {type : Number},
    title : {type : String},
    description: {type : String},
    price : {type : String},
    discountPercentage : {type : Number},
    rating : {type : String},
    stock : {type : String},
    brand : {type : String},
    category : {type : String},   

});

const product_model = mongoose.model('product', productmodel);

module.exports = product_model;