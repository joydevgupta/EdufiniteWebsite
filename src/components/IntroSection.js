import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function IntroSection() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        I am an experienced English educator who has been teaching students
        worldwide...
      </Typography>
      <Box
        component="img"
        src="https://via.placeholder.com/300x200"
        alt="Educator"
        sx={{ mt: 2 }}
      />
    </Container>
  );
}

export default IntroSection;
