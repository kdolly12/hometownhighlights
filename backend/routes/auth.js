const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Ensure the correct path to your User model
const router = express.Router();

// POST /api/signup - Register a new user
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating the user' });
  }
});

// POST /api/login - Authenticate a user
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Optionally, you can return a success message or token
      res.status(200).json({ message: 'Login successful', username: user.username });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred during login' });
    }
  });
  

module.exports = router;
