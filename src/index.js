const express=require("express");
const { PORT }=require("./config/server.config");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/code",(req,res)=> {
    return res.json({
        "Welcome":"Code compete Conquer"
    });
});

app.listen(PORT,()=>{
    console.log("Server is listening at PORT",PORT);
});
