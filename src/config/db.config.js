const mongoose=require("mongoose");

const {ATLAS_DB_URL}=require("./server.config");

async function connectToDB() {
    try {
        await mongoose.connect(ATLAS_DB_URL);
        console.log("Successfully connected to DB");
    } catch (error) {
        console.log(`Unable to connect to DB server: ${error}`);
    }
}
module.exports=connectToDB;