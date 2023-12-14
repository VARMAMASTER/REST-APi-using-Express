require("dotenv").config();
const connectDB = require("./db/connect");
//model desides our collection name 
const Product = require("./model/apimodel");

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URL)
    }catch(error){
        console.log(error);

    };
};

start();