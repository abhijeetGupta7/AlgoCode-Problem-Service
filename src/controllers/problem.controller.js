const statusCodes=require("http-status-codes");

function pingProblemController(req,res) {
    return res.json({
        "message":"Ping controller is up"
    })
}

function addProblem(req,res) {
    return res.status(501).json({   
        message:"Not implemented"
    });
}

function getProblem(req,res) {
    return res.status(statusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented"
    });
}

function getProblems(req,res) {
    return res.status(statusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented"
    });
}

function deleteProblem(req,res) {
    return res.status(statusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented"
    });
}

function updateProblem(req,res) {
    return res.status(statusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented"
    });
}

module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
};



// res.status(...) : it returns the response object with the HTTP status code set as given
// res.json(...) :   it returns the response object with the json to be returned is set as given
// so that's why res.status().json() works