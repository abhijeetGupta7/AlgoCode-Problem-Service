const sanitizeMarkDownContent = require("../utils/markdownSanitizer");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository=problemRepository;
    }

    async createProblem(problemData) {
            // Sanitize the markdown for description
            problemData.description=sanitizeMarkDownContent(problemData.description);
            
            console.log("ProblemData",problemData);
            const problem=await this.problemRepository.createProblem(problemData);
            
            console.log("Problem created",problem);
            return problem;
    }

    async getAllProblems() {
        const allProblems=await this.problemRepository.getAllProblems();
        return allProblems;
    }
}

module.exports=ProblemService;