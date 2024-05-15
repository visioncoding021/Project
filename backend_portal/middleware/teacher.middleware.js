const {verifyToken} = require("../utils/jwt.util");
const jwt = require("jsonwebtoken");
const teacherAuthenticationChek = (req,res,next)=>{
    const  cookieValue = req.cookies.token;
    console.log(cookieValue);
    if(!cookieValue){
        return res.status(401).send("Unauthorized: No token provided");
    }
    if(verifyToken(cookieValue)){
        const decodedToken = jwt.decode(cookieValue);
        if(decodedToken.isTeacher = true){
            next();
        }else{
            return res.status(403).send("Forbidden: Not an admin");

        }
    }else{
        return res.status(401).send("Unauthorized: Invalid token");

    }
}

module.exports = {
    teacherAuthenticationChek,
}