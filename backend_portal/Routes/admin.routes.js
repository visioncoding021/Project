const {Router} = require("express");
const {adminLoginController,adminLogoutController,addteacherAdminController} = require("../controller/admin.controller");
const {adminAuthenticationCheck} = require("../middleware/admin.middleware")



const router = Router();
router.post("/login",adminLoginController);
router.get("/logout",adminLogoutController)
router.post("/addteacher",adminAuthenticationCheck,addteacherAdminController)
module.exports = router;
