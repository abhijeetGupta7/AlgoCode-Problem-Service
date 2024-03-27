const express=require("express");
const problemController=require("../../controllers/index")   // no need of specifying index, it automatically takes

const problemRouter=express.Router();

problemRouter.get("/ping",problemController.pingProblemController);

problemRouter.get("/:id",problemController.getProblem);

problemRouter.get("/",problemController.getProblems);

problemRouter.post("/",problemController.addProblem);

problemRouter.delete("/:id",problemController.deleteProblem);

problemRouter.put("/:id",problemController.updateProblem);


module.exports=problemRouter;