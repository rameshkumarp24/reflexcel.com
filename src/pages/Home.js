import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

function Home() {
  return (
    <>
      <Box sx={{
        background: 'linear-gradient(90deg, #0f3c7e 0%, #7b2ff2 100%)',
        color: '#fff',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Building the Next Generation of Software
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            At Reflexcel, we harness cutting-edge technologies in AI, Cloud, and Quantum Computing to deliver transformative solutions for tomorrow's world.
          </Typography>
          <Button
            component={RouterLink}
            to="/products"
            size="large"
            variant="contained"
            color="secondary"
            sx={{ fontWeight: 600, px: 5, py: 1.5 }}
          >
            Explore Our Products
          </Button>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <StarIcon sx={{ fontSize: 48, color: '#0f3c7e' }} />
              <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
                Innovation at Core
              </Typography>
              <Typography>
                We push the boundaries of technology, integrating AI, Cloud, and Quantum to create solutions that redefine industries.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <StarIcon sx={{ fontSize: 48, color: '#7b2ff2' }} />
              <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
                Trusted Expertise
              </Typography>
              <Typography>
                Our team brings decades of experience in software engineering, research, and product development for global clients.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <StarIcon sx={{ fontSize: 48, color: '#00c6fb' }} />
              <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
                Future-Ready Solutions
              </Typography>
              <Typography>
                We deliver scalable, secure, and intelligent products that empower businesses to thrive in a rapidly evolving digital landscape.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
