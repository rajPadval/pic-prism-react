const {
  generateOrder,
  verifyOrder,
} = require("../controllers/paymentController");
const { verifyToken } = require("../middlewares/verifyToken");

const express = require("express");
const router = express.Router();

router.post("/payment/generate", verifyToken, generateOrder);
router.post("/payment/verify", verifyToken, verifyOrder);


module.exports = router;
