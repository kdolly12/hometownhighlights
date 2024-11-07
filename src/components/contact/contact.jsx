import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert formData to JSON
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Parse JSON response
      alert(data.message); // Display success message
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    } catch (error) {
      alert('Error submitting form. Please try again.');
      console.error('Error:', error); // Log error for debugging
    }
  };

  return (
    <section className="contact section">
      <div className="contactContainer container">
        <div className="contactTitle">
          <h2>Contact Us</h2>
          <p>We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.</p>
        </div>
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="submitButton">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
