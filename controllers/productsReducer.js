const getallProducts = async(req,res)=>{
    res.status(200).json({owner: "iam getallProducts"})
};

const getallProductsTesting = async(req,res)=>{
    res.status(200).json({owner: "iam getallProductsTesting"})
};

module.exports = {getallProducts,getallProductsTesting};