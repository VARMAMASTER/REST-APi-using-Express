const express = require("express");
const app = express();
const routes = require("./routes/productsDispatcher");
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000
app.get("/",(req,res)=>{
    res.send("boom")
});

//middleware to set router
app.use("/api/products",routes);

const start = async () =>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`listening at localhost:5000`)
        });
    }catch(error){
        console.log(error)
    }
}
start();



