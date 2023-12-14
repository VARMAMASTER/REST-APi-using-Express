require("dotenv").config();
const connectDB = require("./db/connect");
//model desides our collection name 
const Product = require("./model/apimodel");
const data= require("./products.json");

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany({});
        await Product.create(data);
        console.log("success");
    }catch(error){
        console.log(error);
    };
};

start();