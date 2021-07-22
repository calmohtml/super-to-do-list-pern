const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: false }));

// Route
app.use(require("./routes/index"));

// Port
app.listen(5000, () => {
  console.log("Server on port: 5000");
});
