require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const app = express();
const allowedOrigins = [
  "http://localhost:5173", // for development
  "https://ethio-parent-school.vercel.app", // for production
];
 

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // if you're using cookies or sessions
  })
);


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
 app.get("/", (req, res) => {
   res.json({ message: "Welcome to Ethio Parent School API" });
 });

app.post("/api/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Enhanced validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long.",
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
      message: "User registered successfully",
      username: newUser.username,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    res.status(200).json({
      message: "Login successful",
      username: user.username,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});
app.get("/api/test-db", async (req, res) => {
  try {
    const connectionState = mongoose.connection.readyState;
    console.log("MongoDB connection state:", connectionState);
    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    if (connectionState !== 1) {
      return res.status(500).json({
        message: "MongoDB is not connected",
        connectionState,
      });
    }
    await mongoose.connection.db.collection("users").findOne({});
    res.status(200).json({ message: "MongoDB connection successful" });
  } catch (error) {
    console.error("DB test error:", error.message, error.stack);
    res
      .status(500)
      .json({ message: "MongoDB connection failed", error: error.message });
  }
});


// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong!" });
});

// For Vercel, we need to export the app
module.exports = app;

// Only listen to port if not in Vercel
if (process.env.NODE_ENV !== "production") {
  const PORT =
    process.env.PORT || "https://ethio-parent-school-backend.vercel.app";
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
