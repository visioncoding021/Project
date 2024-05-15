const Teacher = require("../model/teacher.model");
const bcrypt = require("bcrypt");
const {generatewebtoken} = require("../utils/jwt.util");
const Quiz = require("../model/quiz.model");
const jwt = require("jsonwebtoken");
const teacherLoginController =  async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Teacher.findOne({ email });

        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
               const token =  generatewebtoken(user);
               console.log(token);
                res.cookie("token", token, { httpOnly: true });

                res.send("Teacher is valid and logged in!");
                return;
            }
        }

        res.status(401).send("Invalid email or password");
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal Server Error");
    }
};

const teacherLogoutController = (req,res)=>{
    res.clearCookie('token');
    res.send("admin logged out");
}

const teacherquizCreateController = async (req, res) => {
    try {
      const quizData = req.body;
      const cookieValue = req.cookies.token;
      const decodedToken = jwt.decode(cookieValue);
      
      const user = await Teacher.findOne({ email: decodedToken.email });
  
      quizData.createdBy = user._id;
  
      const quiz = await Quiz.create(quizData);
  
      user.quizCreated.push({ quizId: quiz._id });
      await user.save();
  
      res.status(201).json(quiz);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  
module.exports = {
    teacherLoginController,
    teacherLogoutController,
    teacherquizCreateController,
}