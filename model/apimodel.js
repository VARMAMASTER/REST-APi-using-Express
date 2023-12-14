const { request } = require("express");
const mongoose = require("mongoose");
const apiSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:[true,"price must br provided"],
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type: Number,
        default: 5,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi"],
            message:`{VALUE} is not supported`,
        }
    }

});

module.exports = mongoose.model("Product",apiSchema);