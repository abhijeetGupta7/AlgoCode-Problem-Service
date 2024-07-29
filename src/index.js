const express=require("express");
const { PORT,ATLAS_DB_URL }=require("./config/server.config");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const apiRouter=require("./routes");
const errorHandler = require("./utils/ErrorHandler");
const connectToDB  = require("./config/db.config");

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api",apiRouter);

app.get("/ping",(req,res)=> {
    return res.status(200).json({
        "Welcome":"ABC"
    });
});

// last errorHandling middleware, if any error occurs
app.use(errorHandler);

app.listen(PORT, async ()=>{
    console.log(`Server is listening at PORT ${PORT}`);
    await mongoose.connect(ATLAS_DB_URL);
    //await connectToDB();
    console.log("Successsfully connected to DB");
});



