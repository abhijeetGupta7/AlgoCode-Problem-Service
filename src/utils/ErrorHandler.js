const BaseError = require("../error/BaseError");
const statusCodes=require("http-status-codes");

function errorHandler(err,req,res,next) {
    if(err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success:"False",
            message:err.message,
            error:err.details,
            data:{}     // bcz this is an exception so no data is going to be provided
        }); 
    }

    return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
        success:"False",
        message:"Something went wrong",
        error:err,
        data:{}    // bcz this is an exception so no data is going to be provided
    })
}

module.exports=errorHandler;