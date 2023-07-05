const comment_model = require("../model/CommentModel");
const post_model = require("../model/PostModel");

const enterData = async ( req, res ) => {

const data = await comment_model.create(req.body);

res.status(200).json({
    status: "success",
    data
})
}

const singlecomment = async (req,res) => {
    const id = req.params.id;
    const data = await comment_model.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const allcomment = async (req,res) => {
    const user = await comment_model.find();

    res.status(200).json({
        status: "success",
        user
    })
}

const deletecomment = async (req,res) => {
    var id = req.params.id;

    await comment_model.deleteOne({"id" : id})
    res.status(200).json({
        status:"success",
    });
}

const updatecomment = async (req,res) => {
    var id = req.params.id;

    await comment_model.updateOne({"id" : id},req.body);

    const data = await comment_model.find({"id" : id});
    res.status(200).json({
        status:"success",
        data
    });
}

const limit_skipcomment = async(req,res) => {
    const data = await comment_model.findOne().limit(req.query.limit).skip(req.query.skip);
    res.status(200).json({
        status: "success",
        data
    });
}

const postId = async (req,res) => {
    var postId = req.params.id;

    const data = await comment_model.find({ "postId": postId });
   
    res.status(200).json({
        status:"success",
        data
    });
}


module.exports = {
    enterData,
    allcomment,
    singlecomment,
    deletecomment,
    updatecomment,
    limit_skipcomment,
    postId
}