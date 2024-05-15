const {Schema,model} = require("mongoose")

const adminSchema = new Schema({
    email : {
        type:String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    quizCreated : [
        {
            quizId :{
                type : Schema.Types.ObjectId,
                ref : "Quiz"
            }
        }
    ],
    role : {
        type : String,
        default : "admin"
    }
},{timestamps : true});

const Admin =  model("Admin",adminSchema);
module.exports = Admin;