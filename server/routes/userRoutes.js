const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library"); // Install: npm install google-auth-library
const {
  createUser,
  getUsers,
  getOldUsers,
  getUser,
  deleteUser,
  updateUser,
  loginUser,
  signupUser,
  resetPassword,
  adminResetPassword,
  getAccountUsage,
} = require("../controllers/userController");

const router = express.Router();

const User = require("../models/User");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// GET all users
router.get("/", getUsers);

// GET inactive users
router.get("/old-users", getOldUsers);

// GET account usage
router.get("/usage", getAccountUsage);

// GET a single user
router.get("/:id", getUser);

// POST a new user
router.post("/", createUser);

// DELETE a user
router.delete("/:id", deleteUser);

// UPDATE a user
router.patch("/:id", updateUser);

// change password
router.patch("/reset-password/:id", resetPassword);

// admin change password
router.patch("/super-reset-password/:id", adminResetPassword);

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// POST /api/users/auth/google/callback
router.post("/auth/google/callback", async (req, res) => {
  try {
    const { token } = req.body;

    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name } = payload;

    // Check if the user already exists
    var user = await User.findOne({ email });

    if (!user) {
      // If the user doesn't exist, create a new user
      user = new User({ email, name, password: " " });
      await user.save();
    }

    // Convert ObjectId to string
    const id = user._id.toString(); // Extract only the string representation of ObjectId

    // JWT payload must be an object, not a string
    const jwtToken = jwt.sign({ id }, process.env.SECRET, { expiresIn: "2d" });

    // Respond with the token and user details
    res.status(200).json({ id, email, token: jwtToken });
  } catch (error) {
    console.error("Google auth error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
