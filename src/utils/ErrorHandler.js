const BaseError = require("../error/BaseError");
const { StatusCodes }=require("http-status-codes");

function errorHandler(err,req,res,next) {            // before the default error Handling middleware
    if(err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success:"False",
            message:err.message,
            error:err.details,
            data:{}     // bcz this is an exception so no data is going to be provided
        }); 
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success:"False",
        message:"Something went wrong!",
        error:err,
        data:{}    // bcz this is an exception so no data is going to be provided
    })
}

module.exports=errorHandler;