const mongoose = require("mongoose");
const uri = "mongodb+srv://saikiranvarma:PBvfuRR0WPoaXpYd@saikiranvarmaapi.wpixz6q.mongodb.net/SaiKiranVarmaAPI?retryWrites=true&w=majority";

const connectDB = ()=>{
    return mongoose.connect(uri,{
    });
};

module.exports =connectDB;