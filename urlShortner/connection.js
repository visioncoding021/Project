const mongoose = require("mongoose");
async function connectToMongodb(url){
    return mongoose.connect(url)
    .then(()=>console.log("database is ready"))
    .catch((err)=>console.log("error" + err));
}

module.exports = {
    connectToMongodb,
}