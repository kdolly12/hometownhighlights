const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Define the Contact schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

// Create a Contact model
const Contact = mongoose.model('Contact', contactSchema);

// POST /api/contact - Handle contact form submissions
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a new contact document
  const newContact = new Contact({
    name,
    email,
    message
  });

  try {
    // Save to the database
    await newContact.save();
    res.status(201).json({ message: 'Contact information saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving the contact information' });
  }
});

module.exports = router;
