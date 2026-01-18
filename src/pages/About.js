import React from 'react';
import { Container, Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function About() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        About Reflexcel
      </Typography>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Reflexcel is a pioneering software company dedicated to building the next generation of digital products using the latest advancements in Artificial Intelligence, Cloud Computing, and Quantum Technologies.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Our Mission
            </Typography>
            <Typography>
              To empower organizations and individuals by delivering innovative, intelligent, and scalable software solutions that drive progress and create lasting impact.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Our Vision
            </Typography>
            <Typography>
              To be a global leader in technology, shaping the future through relentless innovation and a commitment to excellence.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Core Values
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Innovation & Curiosity" />
          </ListItem>
          <ListItem>
            <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Integrity & Transparency" />
          </ListItem>
          <ListItem>
            <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Customer-Centricity" />
          </ListItem>
          <ListItem>
            <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Collaboration & Diversity" />
          </ListItem>
          <ListItem>
            <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Excellence & Quality" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}

export default About;
