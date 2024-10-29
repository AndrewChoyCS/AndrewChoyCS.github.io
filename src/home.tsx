// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
// import Image from './images/last.png'; // Import your image
// import Funnt from './images/derpy.jpeg'; // Import your other image
// import styled from '@emotion/styled';
// import ProjectCard from './components/projectCard.tsx';
// import BIDSpic from './images/logo-color.png'
// import TrAInerpic from './images/image.png'
// import Wildernesspic from './images/BYOW.png'
// import Trafficpic from './images/car.png'
// import Spampic from './images/spam.png'
// import Resumepic from './images/resume.png'
// import Carpic from './images/ino.png'
// import Edupic from './images/edu.jpeg'

// const RootContainer = styled('div')({
//   flexGrow: 1,
//   padding: '16px', // Adjust as needed
//   backgroundColor: '#00000', // Set background color
// });


// const AvatarContainer = styled(Grid)({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center', // Center the content
// });

// const TextContainer = styled(Paper)({
//   padding: '16px', // Adjust as needed
//   backgroundColor: '#424242', // Dark gray background color
//   color: '#ffffff', // White text color
// });

// const AvatarImage = styled(Avatar)({
//   width: '300px', // Adjust as needed
//   height: '300px', // Adjust as needed
//   marginRight: '16px', // Adjust as needed
// });

// const ProjectContainer = styled(Grid)({
//   marginTop: '16px', // Adjust as needed
// });

// function Home() {
//   return (
//     <RootContainer>
//       <Grid container spacing={3} alignItems="center">
//         {/* First Avatar */}
//         <Grid item xs={12} sm={3}>
//           <AvatarContainer>
//             <AvatarImage alt="Your Name" src={Image} />
//           </AvatarContainer>
//         </Grid>
//         {/* Text Container */}
//         <Grid item xs={12} sm={6}>
//           <TextContainer elevation={3}>
//             <Typography variant="h4" gutterBottom>
//               Hello! Hola! Olá! Sup!
//             </Typography>
//             <Typography variant="body1">
//               Hello, I'm Andrew Choy, an undergraduate student at UC Berkeley pursuing a Bachelor's degree in Computer Science and Data Science, with a minor in Applied Mathematics. I am originally from Peru, but was raised in the Bay Area. My passions lie at the intersection of machine learning and education, where I aspire to make meaningful contributions.

//               When I'm not immersed in academic pursuits, you can find me competing professionally in Valorant or playing soccer. Feel free to reach out to me about anything at andrewchoy@berkeley.edu or 510-640-4775; I'm always eager to engage in discussions and explore new opportunities!
//             </Typography>
//           </TextContainer>
//         </Grid>
//         {/* Second Avatar */}
//         <Grid item xs={12} sm={3}>
//           <AvatarContainer>
//             <AvatarImage alt="Your Name" src={Funnt} />
//           </AvatarContainer>
//         </Grid>
//       </Grid>
//       <ProjectContainer container spacing={3}>
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <ProjectCard
//               projectLink='https://drive.google.com/file/d/1tjsdPNxSCIGzv0pRkymKrR0_1Woz7O3R/view?usp=sharing'
//               title='Resume'
//               description='Here is my Resume/CV for reference!'
//               pictureLink={Resumepic}
//               />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <ProjectCard
//             projectLink='https://github.com/anishsasanur/formulai'
//             title='FormulAI'
//             description='Built a mini autonomous car controlled by an arduino, and integrated with sensors/cameras to traverse custom defined racetracks! Core concepts of the project include: PID and Control Algorithms, Computer Vision Algorithms, Reinforcement Learning'
//             pictureLink={Carpic}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <ProjectCard
//             projectLink='https://github.com/AndrewChoyCS/BIDS'
//             title='BIDS'
//             description='Founded an event planning mobile application that revolutionizes the way users organize and participate in events'
//             pictureLink={BIDSpic}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <ProjectCard
//             projectLink='https://drive.google.com/file/d/1L1RrLWh6w2AsREwyGSQIzZTPGwDV9AZr/view?usp=sharing'
//             title='Data Science Research: Characterizing the Landscape of Student Learning Outcomes in Undergraduate Programs'
//             description='Fine-tuned BERT models for sentiment analysis, leveraging Bloom’s Taxonomy framework to analyze and evaluate Program Learning Outcomes, providing insights, driving informed educational research and policy decisions'
//             pictureLink={Edupic}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <ProjectCard
//             projectLink='https://github.com/callaunchpad/fitness-trainer'
//             title='trAIner'
//             description='Designed an LSTM model, leveraging MediaPipe, to classify correct and incorrect squats and give live feedback on how to fix it'
//             pictureLink={TrAInerpic}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <ProjectCard
//             projectLink='merp'
//             title='Lost In The Wilderness'
//             description='Developed a 2D-based video game featuring an intricate maze environment with a coin collection objective'
//             pictureLink={Wildernesspic}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <ProjectCard
//             projectLink='https://github.com/AndrewChoyCS/TrafficDetectionModel'
//             title='Traffic Detection Program'
//             description='Developed a classification model using CNN architecture to implement within a web application instantaneously classify highway traffic levels using live US highway feeds'
//             pictureLink={Trafficpic}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <ProjectCard
//             projectLink='merp'
//             title='Spam vs Ham'
//             description='Built a Logistic Regression model to classify whether an email is spam or not'
//             pictureLink={Spampic}
//           />
//         </Grid>
//       </ProjectContainer>
//     </RootContainer>
//   );
// }

// export default Home;
import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import styled from '@emotion/styled';
import ProjectCard from './components/projectCard.tsx';
import Image from './images/last.png'; 
import Funnt from './images/derpy.jpeg';
import Resumepic from './images/resume.png';
import Carpic from './images/ino.png';
import BIDSpic from './images/logo-color.png';
import TrAInerpic from './images/image.png';
import Wildernesspic from './images/BYOW.png';
import Trafficpic from './images/car.png';
import Spampic from './images/spam.png';
import Edupic from './images/edu.jpeg';

const RootContainer = styled('div')({
  flexGrow: 1,
  padding: '24px',
  background: 'linear-gradient(to right, #2c5364, #203a43, #0f2027)', // Gradient background
});

const AvatarContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const TextContainer = styled(Paper)({
  padding: '24px',
  backgroundColor: '#333333',
  color: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
  borderRadius: '8px', // Rounded corners
});

const AvatarImage = styled(Avatar)({
  width: '260px',
  height: '260px',
  border: '3px solid #3b7df7', // Accent border
  marginRight: '16px',
});

const ProjectContainer = styled(Grid)({
  marginTop: '24px',
  gap: '16px',
});

function Home() {
  return (
    <RootContainer>
      <Grid container spacing={3} alignItems="center">
        {/* First Avatar */}
        <Grid item xs={12} sm={3}>
          <AvatarContainer>
            <AvatarImage alt="Your Name" src={Image} />
          </AvatarContainer>
        </Grid>
        {/* Text Container */}
        <Grid item xs={12} sm={6}>
          <TextContainer elevation={3}>
            <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>
              Hello! Hola! Olá! Sup!
            </Typography>
            <Typography variant="body1">
            Hello, I'm Andrew Choy, an undergraduate student at UC Berkeley pursuing a Bachelor's degree in Computer Science and Data Science, with a minor in Applied Mathematics. I am originally from Peru, but was raised in the Bay Area. My passions lie at the intersection of machine learning and education, where I aspire to make meaningful contributions. When I'm not immersed in academic pursuits, you can find me competing professionally in Valorant or playing soccer. Feel free to reach out to me about anything at andrewchoy@berkeley.edu or 510-640-4775; I'm always eager to engage in discussions and explore new opportunities!           
            </Typography>
          </TextContainer>
        </Grid>
        {/* Second Avatar */}
        <Grid item xs={12} sm={3}>
          <AvatarContainer>
            <AvatarImage alt="Your Name" src={Funnt} />
          </AvatarContainer>
        </Grid>
      </Grid>
      <ProjectContainer container spacing={3}>
        {projectData.map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.title}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </ProjectContainer>
    </RootContainer>
  );
}

const projectData = [
  { projectLink: 'https://drive.google.com/file/d/1tjsdPNxSCIGzv0pRkymKrR0_1Woz7O3R/view?usp=sharing', title: 'Resume', description: 'Here is my Resume/CV for reference!', pictureLink: Resumepic },
  { projectLink: 'https://github.com/anishsasanur/formulai', title: 'FormulAI', description: 'Built a mini autonomous car controlled by an arduino, and integrated with sensors/cameras to traverse custom defined racetracks! Core concepts of the project include: PID and Control Algorithms, Computer Vision Algorithms, Reinforcement Learning', pictureLink: Carpic },
  {projectLink: 'https://github.com/AndrewChoyCS/BIDS', title: 'BIDS', description: 'Founded an event planning mobile application that revolutionizes the way users organize and participate in events' , pictureLink: BIDSpic},
  {projectLink: 'https://drive.google.com/file/d/1L1RrLWh6w2AsREwyGSQIzZTPGwDV9AZr/view?usp=sharing', title: 'Data Science Research: Characterizing the Landscape of Student Learning Outcomes in Undergraduate Programs', description: 'Fine-tuned BERT models for sentiment analysis, leveraging Bloom’s Taxonomy framework to analyze and evaluate Program Learning Outcomes, providing insights, driving informed educational research and policy decisions', pictureLink: Edupic},
  {projectLink: 'https://github.com/callaunchpad/fitness-trainer', title: 'trAIner', description: 'Designed an LSTM model, leveraging MediaPipe, to classify correct and incorrect squats and give live feedback on how to fix it', pictureLink: TrAInerpic},
  {projectLink: 'https://github.com/AndrewChoyCS/TrafficDetectionModel', title: 'Traffic Detection Program', description: 'Developed a classification model using CNN architecture to implement within a web application instantaneously classify highway traffic levels using live US highway feeds', pictureLink: Trafficpic},
  {projectLink: 'merp', title: 'Spam vs Ham', description:'Built a Logistic Regression model to classify whether an email is spam or not' , pictureLink: Spampic}

];

export default Home;
