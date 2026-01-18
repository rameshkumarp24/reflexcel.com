import React from 'react';
import { AppBar, Toolbar, Container, Box, Button, IconButton } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Logo from '../assets/logo_transparent.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Team', path: '/team' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

function Header() {
  const location = useLocation();
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ background: '#fff', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <RouterLink to="/">
              <img src={Logo} alt="Reflexcel Logo" style={{ height: 48, marginRight: 24 }} />
            </RouterLink>
          </Box>
          <Box>
            {navLinks.map(link => (
              <Button
                key={link.path}
                component={RouterLink}
                to={link.path}
                color={location.pathname === link.path ? 'primary' : 'inherit'}
                sx={{ fontWeight: 600, mx: 1 }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
