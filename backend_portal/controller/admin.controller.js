const admin = require("../model/admin.model");
const Teacher = require("../model/teacher.model");
const bcrypt = require("bcrypt");

const { generatewebtoken } = require("../utils/jwt.util");

const adminLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await admin.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = generatewebtoken(user);
        res.cookie("token", token, { httpOnly: true });
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error in admin login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}; 

const adminLogoutController = (req,res)=>{
    res.clearCookie('token');
    res.send("admin logged out");
}

const addteacherAdminController = async (req, res) => {
    const { email, password, department } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const teacher = new Teacher({
            email: email,
            password: hashedPassword, 
            department: department,
        });
        await teacher.save();
        res.send("Teacher added successfully");
    } catch (error) {
        console.error("Error adding teacher:", error);
        res.status(500).send("Internal Server Error");
    }
}
module.exports = {
    adminLoginController,
    adminLogoutController,
    addteacherAdminController,
};


