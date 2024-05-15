const jwt = require("jsonwebtoken");
const SECRET_KEY = "abc123KKKKK";

const generatewebtoken = (user) => {
    const payload = {
        email: user.email,
        role: user.role,
        teacher : user.isTeacher,
        student : user.isStudnet,
    };
    return jwt.sign(
        payload,
        SECRET_KEY,
        { expiresIn: "1h" }
    );
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
};

module.exports = {
    verifyToken,
    generatewebtoken,
};
