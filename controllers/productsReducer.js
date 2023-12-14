const Product = require("../model/apimodel");
//by usinng mongoose Functions 
const getallProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};
  
    if (company) {
      queryObject.company = company;
    }
  
    if (featured) {
      queryObject.featured = featured;
    }
  
    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }
  
    let apiData = Product.find(queryObject);
  
    if (sort) {
      let sortFix = sort.split(",").join(" ");
      apiData = apiData.sort(sortFix);
    }
  
    // (select = name company;
    if (select) {
      // let selectFix = select.replace(",", " ");
      let selectFix = select.split(",").join(" ");
      apiData = apiData.select(selectFix);
    }
  
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
  
    let skip = (page - 1) * limit;
  
    apiData = apiData.skip(skip).limit(limit);
  
    console.log(queryObject);
  
    const Products = await apiData;
    res.status(200).json({ Products, nbHits: Products.length });
  };

  const getallProductsTesting = async (req, res) => {
    console.log(req.query);
    const myData = await Product.find(req.query).skip(2);
    // sort = name,price;
  
    res.status(200).json({ myData, nbHits: myData.length });
  };

module.exports = {getallProducts,getallProductsTesting};