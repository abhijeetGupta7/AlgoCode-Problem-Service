const { Problem }=require("../models");
const logger=require("../config/logger.config");
const NotFoundError=require("../error/notFoundError");

class ProblemRepository {

    async createProblem(problemData) {
        try {
            const problem=await Problem.create({
                title:problemData.title,
                description:problemData.description,
                testcases:(problemData.testcases) ? problemData.testcases:[],
                codeStubs:problemData.codeStubs
            });

            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const allProblems=await Problem.find();
            return allProblems;            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id) {
        try {
            const problem=await Problem.findById(id);
            if(!problem) {
                throw new NotFoundError("Problem",id);
            }
            return problem; 
        } catch(error) {
            console.log(error);
            throw error;
        }
    }


    async deleteProblem(id) {
        try {
            const deletedProblem=await Problem.findByIdAndDelete(id);
            if(!deletedProblem) { 
                logger.error(`Problem with id: ${id} not found in db`);
                throw new NotFoundError("Problem",id);
            }
            return deletedProblem;
        } catch(error) {
            throw error;
        }
    }

    async updateProblem(id,problemData) {
        try {
            const updatedProblem=await Problem.findByIdAndUpdate(id,problemData,{new:true});
            if(!updatedProblem) {
                throw new NotFoundError("Problem",id);
            }           
            return updatedProblem;
        } catch(error) {
            throw error;
        }
    }
}

module.exports=ProblemRepository;