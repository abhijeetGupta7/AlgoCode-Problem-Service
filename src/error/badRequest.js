const BaseError=require("./BaseError");
const statusCodes=require("http-status-codes")

class BadRequest extends BaseError {
    constructor(propertyName,details) {
        super("BadRequest",statusCodes.BAD_REQUEST,`Invalid structure for ${propertyName}`,details);
    }
}

module.exports=BadRequest;