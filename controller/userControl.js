const cart_model = require("../model/CartModel");
const post_model = require("../model/PostModel");
const todo_model = require("../model/TodoModel");
const login_Model = require("../model/userModel");
var jwt = require('jsonwebtoken');

const enterData = async (req, res) => {
    const select = await login_Model.find({ "email": req.body.email });

    if (select.length == 0) {
        const data = await login_Model.create(req.body);

        res.status(200).json({
            status: "success",
            data
        })
    } else {
        res.status(200).json({
            status: "your email is already declair",
        })
    }
}

const userLogin = async (req, res) => {
    const data = await login_Model.find({ "email": req.body.email });
    var token = jwt.sign({ id: req.body.id }, 'data');

    const email = data[0].email;
    const id = data[0].id;
    const username = data[0].username;
    const firstName = data[0].firstName;
    const lastName = data[0].lastName;
    const gender = data[0].gender;
    const image = data[0].image;

    if (data.length == 1) {
        if (data[0].password == req.body.password) {
            res.status(200).json({
                id,
                username,
                email,
                firstName,
                lastName,
                gender,
                image,
                token
            })
        } else {
            res.status(200).json({
                status: "Check your Password"
            })
        }
    } else {
        res.status(200).json({
            status: "Check Your Email"
        })
    }
}

const singleData = async (req, res) => {
    const id = req.params.id;
    const data = await login_Model.find({ "id": id });

    res.status(200).json({
        status: "success",
        data
    })
}

const allUsers = async (req, res) => {
    const user = await login_Model.find();

    res.status(200).json({
        status: "success",
        user
    })
}

const searchusers = async (req, res) => {

    var search_data = req.query;

    var data = await login_Model.find(search_data);

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
    const data = await login_Model.findOne().limit(req.query.limit).skip(req.query.skip);
    res.status(200).json({
        status: "success",
        data
    });
}

const todouserId = async (req,res) => {
    var userId = req.params.id;

    const data = await todo_model.find({ "userId": userId });
   
    res.status(200).json({
        status:"success",
        data
    });
}

const postuserId = async (req,res) => {
    var userId = req.params.id;

    const data = await post_model.find({ "userId": userId });
   
    res.status(200).json({
        status:"success",
        data
    });
}

const cartuserId = async (req,res) => {
    var userId = req.params.id;

    const data = await cart_model.find({ "userId": userId });
   
    res.status(200).json({
        status:"success",
        data
    });
}

const deleteuser = async (req,res) => {
    var id = req.params.id;

    await login_Model.deleteOne({"id" : id})
    res.status(200).json({
        status:"success",
    });
}


const updateuser = async (req,res) => {
    var id = req.params.id;

    await login_Model.updateOne({"id" : id},req.body);

    const data = await login_Model.findOne({"id" : id});
    res.status(200).json({
        status:"success",
        data
    });
}

module.exports = {
    enterData,
    userLogin,
    allUsers,
    singleData,
    searchusers,
    limit_skipuser,
    deleteuser,
    updateuser,
    todouserId,
    postuserId,
    cartuserId
}