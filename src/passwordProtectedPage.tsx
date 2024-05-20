import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Memories from './memories.tsx';

function PasswordProtectedPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = 'merp';

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#2c3e50', // Dark grey background
            color: '#ecf0f1', // Light text color
            padding: 3,
          }}
        >
          {/* <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
            Protected Page
          </Typography> */}
          <form onSubmit={handlePasswordSubmit}>
            <TextField
              type="password"
              label="Enter Password"
              variant="outlined"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ecf0f1',
                  },
                  '&:hover fieldset': {
                    borderColor: '#3498db',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3498db',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#ecf0f1',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#3498db',
                },
                input: {
                  color: '#ecf0f1',
                },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: '#3498db',
                '&:hover': {
                  backgroundColor: '#2980b9',
                },
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      ) : (
        <Memories />
      )}
    </div>
  );
}

export default PasswordProtectedPage;
