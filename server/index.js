const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { readdirSync } = require("fs");
const { connectDb } = require("./connection");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

connectDb();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<center><h1>Server Running...</h1></center>");
});

// adding dynamic routing
readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

app.listen(port, () => console.log(`Server running on port ${port}`));
