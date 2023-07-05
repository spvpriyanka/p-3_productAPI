
const product_model = require("../model/productmodel");

const enterData = async ( req, res ) => {

const data = await product_model.create(req.body);

res.status(200).json({
    status: "success",
    data
})
}

const singleproduct = async (req,res) => {
    const id = req.params.id;
    const data = await product_model.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const allProducts = async (req,res) => {
    const user = await product_model.find();

    res.status(200).json({
        status: "success",
        user
    })
}

const productallcategories = async (req,res) => {
    const data = await product_model.find({},{"category" : 1 , "_id":0});
    res.status(200).json({
        status:"success",
        data
    });
}

const categories = async(req,res) => {
    
    var id = req.params.id;
    
    const data = await product_model.find({"category" : id});
    res.status(200).json({
        status:"success",
        data
    });
}

const searchproducts = async (req, res) => {

    var search_data = req.query;

    var data = await product_model.find(search_data);

    if (data.length == 1) {
        res.status(200).json({
            status: "success",
            data
        })
    } else {
        res.status(200).json({
            status: "No results found",
        })
    }
}

const limit_skipuser = async(req,res) => {
    const data = await product_model.findOne().limit(req.query.limit).skip(req.query.skip);
    res.status(200).json({
        status: "success",
        data
    });
}

const deleteproducts = async (req,res) => {
    var id = req.params.id;

    await product_model.deleteOne({"id" : id})
    res.status(200).json({
        status:"success",
    });
}

const updateproducts = async (req,res) => {
    var id = req.params.id;

    await product_model.updateOne({"id" : id},req.body);

    const data = await product_model.findOne({"id" : id});
    res.status(200).json({
        status:"success",
        data
    });
}


module.exports = {
    enterData,
    allProducts,
    singleproduct,
    productallcategories,
    categories,
    searchproducts,
    limit_skipuser,
    deleteproducts,
    updateproducts
}