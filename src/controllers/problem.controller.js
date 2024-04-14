const StatusCodes=require("http-status-codes");
const NotImplemented = require("../error/not_implemented.error");
const { ProblemService }=require("../services");
const { ProblemRepository }=require("../repositories");
const NotFoundError = require("../error/notFoundError");

const problemService=new ProblemService(new ProblemRepository()); 

function pingProblemController(req,res) {
    return res.json({
        "message":"Ping controller is up"
    })
}

async function addProblem(req,res,next) {
    try {
        const newProblem=await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            message:"Success",
            error:{},
            data:newProblem
        })
    }
    catch(error) {
        next(error);      // error handling middleware is called
    }
}

async function getProblems(req,res,next) {
    try {
        const allProblems=await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            "success":true,
            "message":"successfully fetched all the problems",
            "error":{},
            "data":allProblems
        });
    }
    catch(error) {
        next(error);      // error handling middleware is called
    }
}


async function getProblem(req,res,next) {
    try {
        const id=req.params.id;
        const problem=await problemService.getProblem(id);
        return res.status(StatusCodes.OK).json({
            "success":true,
            "message":"successfully fetched the problem",
            "error":{},
            "data":problem
        });
    }
    catch(error) {
        next(error);      // error handling middleware is called
    }
}

async function deleteProblem(req,res,next) {
    try {
        const id=req.params.id;
        const deletedProblem=await problemService.deleteProblem(id);
        return res.status(StatusCodes.OK).json({
            "success":true,
            "message":`Problem with id ${id} is successfully deleted`,
            "error":{},
            "data": deletedProblem
        });
    }
    catch(error) {
        next(error);      // error handling middleware is called
    }
}

async function updateProblem(req,res,next) {
    try {
        const problem=await problemService.updateProblem(req.params.id,req.body);
        return res.status(StatusCodes.OK).json({
            "success":true,
            "message":`Problem with id: ${req.params.id} is successfully updated`,
            "error":{},
            "data":problem
        });
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