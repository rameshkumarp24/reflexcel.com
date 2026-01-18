import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

const team = [
  {
    name: 'Dr. Maya Patel',
    title: 'Founder & CEO',
    bio: 'Visionary leader with 20+ years in AI and cloud innovation. Former head of R&D at a Fortune 500 tech company.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Alex Kim',
    title: 'Chief Technology Officer',
    bio: 'Expert in quantum computing and distributed systems. Author of several open-source frameworks.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Priya Singh',
    title: 'VP of Product',
    bio: 'Product strategist with a passion for user-centric design and emerging tech. Ex-Google product lead.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    name: 'David Chen',
    title: 'Head of Engineering',
    bio: 'Seasoned engineer and team builder. Led large-scale cloud deployments for global enterprises.',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg'
  }
];

function Team() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Meet Our Leadership
      </Typography>
      <Grid container spacing={4}>
        {team.map(member => (
          <Grid item xs={12} md={3} key={member.name}>
            <Card elevation={2} sx={{ textAlign: 'center', py: 3 }}>
              <Avatar src={member.avatar} alt={member.name} sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} />
              <CardContent>
                <Typography variant="h6" fontWeight={600}>{member.name}</Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>{member.title}</Typography>
                <Typography variant="body2">{member.bio}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Team;
