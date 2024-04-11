const sanitizeMarkDownContent = require("../utils/markdownSanitizer");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository=problemRepository;
    }

    async createProblem(problemData) {
            // Sanitize the markdown for description
            problemData.description=sanitizeMarkDownContent(problemData.description);
            
            const problem=await this.problemRepository.createProblem(problemData);
            
            return problem;
    }

    async getAllProblems() {
        const allProblems=await this.problemRepository.getAllProblems();
        return allProblems;
    }


    async getProblem(id) {
        const problem=await this.problemRepository.getProblem(id);
        return problem;
    }
}

module.exports=ProblemService;