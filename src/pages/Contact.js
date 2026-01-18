import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Alert } from '@mui/material';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Have a question or want to collaborate? Reach out to our team!
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          multiline
          minRows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ fontWeight: 600 }}>
          Send Message
        </Button>
        {submitted && <Alert severity="success">Thank you for contacting us! We'll get back to you soon.</Alert>}
      </Box>
      <Box sx={{ mt: 6 }}>
        <Typography variant="body2" color="text.secondary">
          Reflexcel, 123 Innovation Drive, Tech City, USA<br />
          Email: info@reflexcel.com
        </Typography>
      </Box>
    </Container>
  );
}

export default Contact;
