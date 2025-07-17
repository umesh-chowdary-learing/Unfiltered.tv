const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Dummy user for demonstration
const users = [{ id: 1, username: "admin", password: "$2a$10$1234567890123456789012" }];

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token expires in 1 hour
  });
};

// Login Route
const login = (req, res) => {
  const { username, password } = req.body;

  // Find user (In a real app, query from DB)
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ message: "User not found" });

  // Validate password
  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  // Generate token
  const token = generateToken(user);
  res.json({ token });
};

module.exports = { login };
