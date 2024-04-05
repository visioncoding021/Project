// learn how to connect node js with data base
// perfome curd opertation on it...

const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/restApp")
  .then(() => console.log("Database is ready!!!"))
  .catch((err) => console.log("Something went wrong"));

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required : false
  },
},{timestamps:true});

const User = mongoose.model("User", userSchema);

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.listen(8000, () => {
  console.log("Server is ready!!!");
});

app.post("/api/users/", async (req, res) => {
  const body = await req.body;
  console.log(body)

  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
    return res.status(400).json({ msg: "Fill the required fields" });
  }

  try {
    const result = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      gender: body.gender,
      jobTitle: body.jobTitle,
    });
    console.log(result);
    return res.status(201).json({ msg: "Success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

app.get("/api/users",async(req,res)=>{
      const allUsers = await User.find({});
      const html = `
       <ul>
        ${allUsers.map(user => `<li> ${user.firstName} - ${user.email}</li>`).join("")}
         </ul>
      `
    res.send(html);
})

app.route("/api/user/:id")
.get( async (req,res)=>{
    const user = await User.findById(req.params.id);
    console.log(user)
    if(!user) return res.status(404).json({err : "user not  found!!"});
    return res.json(user);
})
.patch(async (req,res)=>{
   await User.findByIdAndUpdate(req.params.id,{lastName : "Changed"});
   return res.json({status : "Success"});
})
.delete(async (req,res)=>{
   await user.findByIdAndDelete(req.params.id);
   return res.json({status : "Success"});
})
