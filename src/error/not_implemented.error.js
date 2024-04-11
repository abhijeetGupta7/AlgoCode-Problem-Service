const BaseError=require("./BaseError");

const StatusCodes =require("http-status-codes");

class NotImplemented extends BaseError {
    constructor(methodName) {
        super("Not implemented error",StatusCodes.NOT_IMPLEMENTED,`${methodName} is not implemented yet`,{});
    }
}

module.exports=NotImplemented;