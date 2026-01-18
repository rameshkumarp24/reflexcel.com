import React from 'react';
import { Container, Typography, Box, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SendIcon from '@mui/icons-material/Send';

const jobs = [
  {
    title: 'AI Research Engineer',
    desc: 'Develop and deploy state-of-the-art AI models for real-world applications.'
  },
  {
    title: 'Cloud Solutions Architect',
    desc: 'Design scalable, secure, and robust cloud-native systems.'
  },
  {
    title: 'Quantum Software Developer',
    desc: 'Build next-gen quantum algorithms and simulation tools.'
  },
  {
    title: 'Full Stack Developer',
    desc: 'Create beautiful, performant web and mobile applications.'
  }
];

function Careers() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Careers at Reflexcel
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Join a passionate team shaping the future of technology. We value curiosity, creativity, and a drive for excellence.
      </Typography>
      <Box sx={{ mb: 4 }}>
        <List>
          {jobs.map(job => (
            <ListItem key={job.title} alignItems="flex-start">
              <ListItemIcon><WorkIcon color="primary" /></ListItemIcon>
              <ListItemText
                primary={<Typography fontWeight={600}>{job.title}</Typography>}
                secondary={job.desc}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Interested in joining us? Send your resume and a brief introduction to <b>careers@reflexcel.com</b> or click below to contact us.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon />}
        href="/contact"
        sx={{ fontWeight: 600 }}
      >
        Contact Us
      </Button>
    </Container>
  );
}

export default Careers;
