const statusCodes=require("http-status-codes");
const NotImplemented = require("../error/not_implemented.error");

function pingProblemController(req,res) {
    return res.json({
        "message":"Ping controller is up"
    })
}

function addProblem(req,res,next) {
    try {
        throw new NotImplemented("Add Problem");
    }
    catch(error) {
        next(error);      // error handling middleware is called
    }
}

function getProblem(req,res,next) {
    try {
        throw new NotImplemented("Get Problem");
    }
    catch(error) {
        next(error);      // error handling middleware is called
    }
}

function getProblems(req,res,next) {
    try {
        throw new NotImplemented("Get Problems");
    }
    catch(error) {
        next(error);      // error handling middleware is called
    }
}

function deleteProblem(req,res,next) {
    try {
        throw new NotImplemented("Delete Problem");
    }
    catch(error) {
        next(error);      // error handling middleware is called
    }
}

function updateProblem(req,res,next) {
    try {
        throw new NotImplemented("Update Problem");
    }
    catch(error) {
        next(error);      // error handling middleware is called
    }
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