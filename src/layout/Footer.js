import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ background: '#181c2a', color: '#fff', py: 4, mt: 6 }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body2" align="center" sx={{ mb: 1 }}>
          &copy; {new Date().getFullYear()} Reflexcel. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="/privacy" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          |
          <Link href="/terms" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
