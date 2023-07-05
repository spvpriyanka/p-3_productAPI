const todo_model = require("../model/TodoModel");

const enterData = async ( req, res ) => {

const data = await todo_model.create(req.body);

res.status(200).json({
    status: "success",
    data
})
}

const singletodo = async (req,res) => {
    const id = req.params.id;
    const data = await todo_model.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const alltodo = async (req,res) => {
    const user = await todo_model.find();

    res.status(200).json({
        status: "success",
        user
    })
}

const deletetodo = async (req,res) => {
    var id = req.params.id;

    await todo_model.deleteOne({"id" : id})
    res.status(200).json({
        status:"success",
    });
}

const updatetodo = async (req,res) => {
    var id = req.params.id;

    await todo_model.updateOne({"id" : id},req.body);

    const data = await todo_model.findOne({"id" : id});
    res.status(200).json({
        status:"success",
        data
    });
}

const randomtodo = async(req,res) => {
    
    const data = await todo_model.aggregate([{ $sample : {size:1}}]);
    
    res.status(200).json({
        status:"success",
        data
    });
}


module.exports = {
    enterData,
    alltodo,
    singletodo,
    deletetodo,
    updatetodo,
    randomtodo
}