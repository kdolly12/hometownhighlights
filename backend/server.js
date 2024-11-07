const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); 
const contactRoutes = require('./routes/contact');
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/trip', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Ensure the correct use of the auth routes
app.use('/api', authRoutes); 
app.use('/api', contactRoutes);
// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
