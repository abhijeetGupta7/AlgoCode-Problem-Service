const BaseError=require("./BaseError");

const statusCodes =require("http-status-codes");

class NotImplemented extends BaseError {
    constructor(methodName) {
        super("Not implemented error",statusCodes.NOT_IMPLEMENTED,`${methodName} is not implemented yet`,{});
    }
}

module.exports=NotImplemented;