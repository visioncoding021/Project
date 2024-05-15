const {Schema,model} = require("mongoose");

const studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        indexing : true
    },
    password : {
        type:String,
        required : true,
    },
    isPasswordModified : {
        type:Boolean,
        default:false
    },
    department : {
        type:String,
        required : true
    },
quizAttemped :[
    {
        type : Schema.Types.ObjectId,
        ref : "Quiz",
        marksObtained : Number,
        maximumMarks : Number,

    }
]
},{timestamps})

const Student = model("Student",studentSchema);