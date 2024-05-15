const {Schema,model} = require("mongoose")

const teacherSchema = new Schema({
    email : {
        type:String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    department : {
        type : String,
        required : true,
    },
    isAdmin:{
        type : Boolean,
        default :false,
    },
    isTeacher : {
        type : Boolean,
        default: true,
    },
    quizCreated : [
        {
            quizId :{
                type : Schema.Types.ObjectId,
                ref : "Quiz"
            }
        }
    ]
},{timestamps : true})

const Teacher = model("Teacher",teacherSchema);
module.exports = Teacher;