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
    console.log("MongoDB connection error:", err);
  });

app.post("/api/register", async (req, res) => {
  try {
    const { username, email, password } = req.body
    
    if (!username || !email || !password) {
      return res.status(400).json({ message: "all field is required." })
      

    }
    //check if the user already exists
    const existingUser = await User.findOne({ email })
    
    if (existingUser) {
      return res.status(400).json({ message: "email all already use." })
      

    }
    //hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10)

    // create new user
    const newUser = new User({ username, email, password: hashedPassword })
    await newUser.save()
   
    res.status(201).json({ message: "User registered successfully." })
    
  } catch (error) {
    res.status(500).json({message: "server error. please try again later."})
  }
})
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "all field is required." });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "user not found! " });
    }

    // Compare password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      return res.status(200).json({ message: "login successful!" })
    }
    else {
      return res.status(400).json({message: "invalid credentiats!"})
    }

    
  } catch (error) {
    res.status(500).json({message: "server error. please try again later."})
  }
})




//run express server on port 5000

app.listen(5000, () => {
  console.log("server running on port 5000");
});
