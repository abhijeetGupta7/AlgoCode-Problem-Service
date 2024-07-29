const mongoose=require("mongoose");

const problemSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title can't be empty"]
    },
    description:{
        type:String,
        required:[true,"Description can't be empty"]
    },
    difficulty:{
        type:String,
        enum:["easy","medium","hard"],
        required:[true,"Difficulty can't be empty"],
        default:"easy"
    },
    testcases:[
        {
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            }
        }
    ],
    codeStubs:[
        {
            language:{
                type:String,
                required:true,
                enum:["CPP","PYTHON","JAVA"]
            },
            startCode:{
                type:String,
                required:true,
            },
            endCode:{
                type:String,  // for java and python
            },
            userCode:{
                type:String,
                required:true
            }
        }
    ],
    editorial:{
        type:String
    }
});

const Problem=mongoose.model('Problem',problemSchema);


module.exports=Problem;