const sanitizeMarkDownContent = require("../utils/markdownSanitizer");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository=problemRepository;
    }

    async createProblem(problemData) {
        try {
            // Sanitize the markdown for description
            problemData.description=sanitizeMarkDownContent(problemData.description);
            
            console.log("ProblemData",problemData);
            const problem=await this.problemRepository.createProblem(problemData);
            
            console.log("Problem created",problem);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports=ProblemService;