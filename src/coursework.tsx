import React from 'react';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const TitleWrapper = styled.div`
//   background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-bottom: 20px;
`;

const CourseworkItem = styled.div`
//   margin-bottom: 10px;
`;

const SemesterWrapper = styled.div`
  margin-bottom: 30px;
  margin-left: 50px;
  margin-right: 50px;
`;

function Coursework() {
  return (
    <div>

      <TitleWrapper>
        <Typography variant="h4" align="center">Coursework</Typography>
        <Typography variant='subtitle1' gutterBottom align="center">
          Below is a list of all the CS/DS/Math major courses I have taken at UC Berkeley:
        </Typography>
      </TitleWrapper>

      <SemesterWrapper>
        <StyledPaper elevation={3}>
          <Typography variant='h6'>Spring 2024</Typography>
          <CourseworkItem>
            <Typography variant='subtitle1'>• CS 170: Efficient Algorithms and Intractable Problems</Typography>
          </CourseworkItem>
          <CourseworkItem>
            <Typography variant='subtitle1'>• CS 188: Introduction to Artificial Intelligence</Typography>
          </CourseworkItem>
          <CourseworkItem>
            <Typography variant='subtitle1'>• DATA 100: Principles & Techniques of Data Science</Typography>
          </CourseworkItem>
        </StyledPaper>
      </SemesterWrapper>

      <SemesterWrapper>
        <StyledPaper elevation={3}>
          <Typography variant='h6'>Fall 2023</Typography>
          <CourseworkItem>
            <Typography variant='subtitle1'>• CS 61C: Great Ideas of Computer Architecture (Machine Structures)</Typography>
          </CourseworkItem>
          <CourseworkItem>
            <Typography variant='subtitle1'>• DATA 8: Foundations of Data Science</Typography>
          </CourseworkItem>
        </StyledPaper>
      </SemesterWrapper>

      <SemesterWrapper>
        <StyledPaper elevation={3}>
          <Typography variant='h6'>Summer 2023</Typography>
          <CourseworkItem>
            <Typography variant='subtitle1'>• CS70: Discrete Mathematics and Probability Theory</Typography>
          </CourseworkItem>
        </StyledPaper>
      </SemesterWrapper>

      <SemesterWrapper>
        <StyledPaper elevation={3}>
          <Typography variant='h6'>Spring 2023</Typography>
          <CourseworkItem>
            <Typography variant='subtitle1'>• CS 61B: Data Structures</Typography>
          </CourseworkItem>
          <CourseworkItem>
            <Typography variant='subtitle1'>• MATH 54: Linear Algebra and Differential Equations</Typography>
          </CourseworkItem>
        </StyledPaper>
      </SemesterWrapper>

      <SemesterWrapper>
        <StyledPaper elevation={3}>
          <Typography variant='h6'>Fall 2022</Typography>
          <CourseworkItem>
            <Typography variant='subtitle1'>• CS 61A: The Structure and Interpretation of Computer Programs</Typography>
          </CourseworkItem>
          <CourseworkItem>
            <Typography variant='subtitle1'>• MATH 1B: Calculus II</Typography>
          </CourseworkItem>
        </StyledPaper>
      </SemesterWrapper>
    </div>
  );
}

export default Coursework;
