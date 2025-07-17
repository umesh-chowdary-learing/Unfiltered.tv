require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const routes = require("./src/routes/index");
const errorMiddleware=require("./src/middleware/errorMiddleware");
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON body
app.use(morgan("dev")); // Log requests
app.use(helmet()); // Secure HTTP headers



app.use("/api",routes)

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Unfiltered.tv API!");
});

// Use the global error handler
app.use(errorMiddleware);


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
