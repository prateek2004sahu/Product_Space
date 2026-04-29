const router = require("express").Router();
const { signup, login } = require("../controllers/authController");
const {
  signupValidator,
  loginValidator,
  validate,
} = require("../validators/authValidator");

router.post("/signup", signupValidator, validate, signup);
router.post("/login", loginValidator, validate, login);

module.exports = router;