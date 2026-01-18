import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardHeader, Box } from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import MemoryIcon from '@mui/icons-material/Memory';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SecurityIcon from '@mui/icons-material/Security';

const products = [
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 48, color: '#7b2ff2' }} />, 
    title: 'AI Solutions',
    desc: 'Custom AI models, NLP, computer vision, and automation tools to supercharge your business.'
  },
  {
    icon: <CloudQueueIcon sx={{ fontSize: 48, color: '#0f3c7e' }} />,
    title: 'Cloud Platforms',
    desc: 'Scalable, secure, and cost-effective cloud-native applications and migration services.'
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 48, color: '#00c6fb' }} />,
    title: 'Quantum Computing',
    desc: 'Quantum algorithms and simulation services for research and enterprise innovation.'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48, color: '#43e97b' }} />,
    title: 'Cybersecurity',
    desc: 'Advanced security solutions to protect your data, infrastructure, and reputation.'
  },
];

function Products() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Our Products & Expertise
      </Typography>
      <Typography variant="h6" sx={{ mb: 5 }}>
        Reflexcel delivers a suite of next-generation software products and services, leveraging the latest in AI, Cloud, and Quantum technologies.
      </Typography>
      <Grid container spacing={4}>
        {products.map((prod, idx) => (
          <Grid item xs={12} md={6} key={prod.title}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardHeader
                avatar={prod.icon}
                title={<Typography variant="h6" fontWeight={600}>{prod.title}</Typography>}
              />
              <CardContent>
                <Typography>{prod.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Why Choose Reflexcel?
        </Typography>
        <Typography>
          We combine deep technical expertise, a passion for innovation, and a relentless focus on customer success. Our solutions are designed to scale, adapt, and deliver measurable value in a rapidly changing world.
        </Typography>
      </Box>
    </Container>
  );
}

export default Products;
