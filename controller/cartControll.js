const cart_model = require("../model/CartModel");

const enterData = async ( req, res ) => {

const data = await cart_model.create(req.body);

res.status(200).json({
    status: "success",
    data
})
}

const singlecart = async (req,res) => {
    const id = req.params.id;
    const data = await cart_model.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const allcart = async (req,res) => {
    const user = await cart_model.find();

    res.status(200).json({
        status: "success",
        user
    })
}

const deletecart = async (req,res) => {
    var id = req.params.id;

    await cart_model.deleteOne({"id" : id})
    res.status(200).json({
        status:"success",
    });
}

const updatecart = async (req,res) => {
    var id = req.params.id;

    await cart_model.updateOne({"id" : id},req.body);

    const data = await cart_model.findOne({"id" : id});
    res.status(200).json({
        status:"success",
        data
    });
}


module.exports = {
    enterData,
    allcart,
    singlecart,
    deletecart,
    updatecart
}