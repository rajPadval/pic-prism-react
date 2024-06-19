const Order = require("../models/Order");

const getOrders = async (req, res) => {
  const authorId = req.id;
  const authorAccountType = req.accountType;
  const author = req.author;
  try {
    let orders;
    if (authorAccountType === "buyer") {
      orders = await Order.find({ purchaserId: authorId });
    } else {
      orders = await Order.find({ author });
    }
    if (!orders) {
      return res
        .status(200)
        .json({ success: true, message: "No orders found" });
    }
    return res.status(200).json({ success: true, data: orders });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getOrders };
