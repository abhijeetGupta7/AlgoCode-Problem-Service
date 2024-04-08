const BaseError=require("./BaseError");
const StatusCodes=require("http-status-codes")

class InternalServerError extends BaseError {
    constructor(details) {
        super("Internal Server Error",StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong !" ,details);
    }
}

module.exports=InternalServerError;