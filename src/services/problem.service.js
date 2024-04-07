const sanitizeMarkDownContent = require("../utils/markdownSanitizer");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository=problemRepository;
    }

    async createProblem(problemData) {
        try {
            problemData.description=sanitizeMarkDownContent(problemData.description);
            const problem=await this.problemRepository.createProblem(problemData);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports=ProblemService;