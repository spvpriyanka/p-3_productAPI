const comment_model = require("../model/CommentModel");
const post_model = require("../model/PostModel");

const enterData = async ( req, res ) => {

const data = await post_model.create(req.body);

res.status(200).json({
    status: "success",
    data
})
}

const singlepost = async (req,res) => {
    const id = req.params.id;
    const data = await post_model.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const allpost = async (req,res) => {
    const user = await post_model.find();

    res.status(200).json({
        status: "success",
        user
    })
}

const deletepost = async (req,res) => {
    var id = req.params.id;

    await post_model.deleteOne({"id" : id})
    res.status(200).json({
        status:"success",
    });
}

const updatepost = async (req,res) => {
    var id = req.params.id;

    await post_model.updateOne({"id" : id},req.body);

    const data = await post_model.findOne({"id" : id});
    res.status(200).json({
        status:"success",
        data
    });
}

const searchposts = async (req, res) => {

    var search_data = req.query;

    var data = await post_model.find(search_data);

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


const postuserId = async (req,res) => {
    var postId = req.params.id;

    const data = await post_model.find({ "userId": postId });
   
    res.status(200).json({
        status:"success",
        data
    });
}

const limit_skippost = async(req,res) => {
    const data = await post_model.findOne().limit(req.query.limit).skip(req.query.skip);
    res.status(200).json({
        status: "success",
        data
    });
}

const postcommentId = async (req,res) => {
    var postId = req.params.id;

    const data = await comment_model.find({ "postId": postId });
   
    res.status(200).json({
        status:"success",
        data
    });
}


module.exports = {
    enterData,
    allpost,
    singlepost,
    deletepost,
    updatepost,
    searchposts,
    limit_skippost,
    postuserId,
    postcommentId
}