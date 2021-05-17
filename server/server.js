const express=require("express");
const path=require("path");
const port=process.env.PORT || 9999;
const app=express();
const publicPath=path.join(__dirname,"..","public");

app.use(express.static(publicPath));

app.get("*",(req,res)=>{ 
    res.sendFile(publicPath,"index.html");
}) 

app.listen(port,()=>{
    console.log(`server is running at : ${port} !`);
});

