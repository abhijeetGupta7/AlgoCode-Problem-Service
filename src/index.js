const express=require("express");
const { PORT }=require("./config/server.config");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const apiRouter=require("./routes");
const errorHandler = require("./utils/ErrorHandler");
const connectToDB = require("./config/db.config");

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api",apiRouter);

app.get("/ping",(req,res)=> {
    return res.json({
        "Welcome":"ABC"
    });
});

// last middleware if any error occurs
app.use(errorHandler);

const Cat = mongoose.model('Cat', { name: String });

app.listen(PORT,()=>{
    console.log(`Server is listening at PORT ${PORT}`);
    connectToDB();
});
