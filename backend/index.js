require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bcrypt = require("bcryptjs");
const User = require("./models/User");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL

//connect to mongooDB



mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("mongodb connected...");
  })
  .catch((err) => {
    console.log("❌ MongoDB connection error:", err);
  });

//sign up route
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password before saving to MongoDB
  bcrypt.hash(password, 10, (err, hashedpassword) => {
    if (err) {
      return res.status(500).json({ error: "error hashing password" });
    }
    const newuser = new User({
      username,
      email,
      password: hashedpassword,
    });

    newuser
      .save()
      .then(() =>
        res.status(201).json({ message: "user registered succesfully" })
      )
      .catch((err) => res.status(500).json({ error: "error registing" }));
  });
});

// Login Route - Login with existing user
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  User.findOne({ email })
    .then((user) => {
      if (!user) return res.status(404).json({ error: "User not found!" });

      // Compare password with the stored hashed password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err)
          return res.status(500).json({ error: "Error comparing passwords" });

        if (isMatch) {
          // Here, you would typically generate a JWT and send it back
          res.status(200).json({ message: "Login successful!" });
        } else {
          res.status(400).json({ error: "Invalid credentials!" });
        }
      });
    })
    .catch((err) => res.status(500).json({ err: "Error finding user" }));
});
//run express server on port 5000

app.listen(5000, () => {
  console.log("server running on port 5000");
});
