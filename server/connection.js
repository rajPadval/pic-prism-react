const mongoose = require("mongoose");

const connectDb = () =>
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Error connecting to database", error));

module.exports = { connectDb };
