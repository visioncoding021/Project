const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Admin = require("./model/admin.model");
const adminRouter = require("./Routes/admin.routes");
const cookieParser = require("cookie-parser");
const admin = require("./model/admin.model");
const teacherRouter = require("./Routes/teacher.routes");
const app = express();
PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/ExamPortal").then( async()=>{
    const adminFind =  await admin.findOne({email :"admin@gmail.com"});
       if(!adminFind){

       
    const hashedPassword = await bcrypt.hash("12345",10);
    const admin = new Admin({
        email: "admin@gmail.com",
        password: hashedPassword
    });

    await admin.save()
}
    console.log("Admin user seeded successfully");
    console.log("DB is connected");
  

}).catch((error)=>{
    console.log(error);
})
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/admin",adminRouter);
app.use("/teacher",teacherRouter);
app.listen(PORT,()=>{
    console.log("server is runnning on port ",PORT);
})