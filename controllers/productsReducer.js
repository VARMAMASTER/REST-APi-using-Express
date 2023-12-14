const Product = require("../model/apimodel");
//by usinng mongoose Functions 
const getallProducts = async(req,res)=>{
    const myData = await Product.find(req.query); // searching operation
    // console.log(myData); //it is an array
    res.status(200).json(myData);
};

const getallProductsTesting = async(req,res)=>{
    const myData = await Product.find({});
    res.status(200).json({owner: "iam getallProductsTesting"})
};

module.exports = {getallProducts,getallProductsTesting};