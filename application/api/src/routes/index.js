const express = require("express");
const router = express.Router();

const newsRoutes = require("./news/filteredNews");
// const userRoutes = require("./userRoutes");
const authMiddleware = require("../middleware/authMiddleware");
const loggerMiddleware = require("../middleware/loggerMiddleware");

// Apply logger middleware to all routes
router.use(loggerMiddleware);

// // Public Routes
// router.use("/users", userRoutes);

// Protected Routes (Requires Auth)
router.use("/news", newsRoutes);

module.exports = router;
