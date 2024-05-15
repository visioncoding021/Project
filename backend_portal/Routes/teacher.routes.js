const { Router } = require("express");
const {teacherLoginController,teacherLogoutController,teacherquizCreateController} = require("../controller/teacher.controller");
const {teacherAuthenticationChek} = require("../middleware/teacher.middleware");

const router = Router();

router.post("/login",teacherLoginController);
router.get("/logout",teacherLogoutController);
router.post("/createQuiz",teacherAuthenticationChek,teacherquizCreateController);

module.exports = router;
