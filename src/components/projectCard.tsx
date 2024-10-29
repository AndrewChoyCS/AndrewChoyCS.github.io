// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import { CardMedia, Typography } from '@mui/material';
// import githubPic from '../images/download.png';

// function ProjectCard({ projectLink, title, description, pictureLink}) {
//   return (
//     <a href={projectLink} style={{ textDecoration: 'none' }}>
//       <Card
//         sx={{
//           maxWidth: 345,
//           backgroundColor: '#424242', // Dark grey background color for the card
//           color: '#ffffff', // White text color for better contrast
//           '&:hover': {
//             boxShadow: 6, // Add some hover effect to indicate it's clickable
//           },
//         }}
//       >
//         <CardMedia
//           sx={{ height: 140 }}
//           image={pictureLink}
//           title="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div" sx={{ color: '#3b7df7' }}>
//             {title}
//           </Typography>
//           <Typography variant="body2" color="#ffffff">
//             {description}
//           </Typography>
//         </CardContent>
//       </Card>
//     </a>
//   );
// }

// export default ProjectCard;
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function ProjectCard({ projectLink, title, description, pictureLink }) {
  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: '#333333',
          color: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
          '&:hover': { transform: 'scale(1.03)', boxShadow: '0 8px 16px rgba(0,0,0,0.4)' },
        }}
      >
        <CardMedia
          sx={{ height: 160, borderRadius: '12px 12px 0 0' }}
          image={pictureLink}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#3b7df7', fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="#ffffff">
            {description}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          href={projectLink}
          sx={{
            margin: '16px',
            backgroundColor: '#3b7df7',
            color: '#ffffff',
            '&:hover': { backgroundColor: '#1a5cbb' },
          }}
        >
          Visit Project
        </Button>
      </Card>
    </a>
  );
}

export default ProjectCard;
