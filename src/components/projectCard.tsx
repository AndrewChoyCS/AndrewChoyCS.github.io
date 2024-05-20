import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Typography } from '@mui/material';
import githubPic from '../images/download.png';

function ProjectCard({ projectLink, title, description, pictureLink}) {
  return (
    <a href={projectLink} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: '#424242', // Dark grey background color for the card
          color: '#ffffff', // White text color for better contrast
          '&:hover': {
            boxShadow: 6, // Add some hover effect to indicate it's clickable
          },
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={pictureLink}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#3b7df7' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="#ffffff">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
}

export default ProjectCard;
