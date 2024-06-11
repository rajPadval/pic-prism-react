const { signup, login, refresh } = require("../controllers/authController");

const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/refresh", refresh);

module.exports = router;
