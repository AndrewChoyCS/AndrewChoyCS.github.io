import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Coursework from './coursework.tsx';
import Memories from './memories.tsx';
import PasswordProtectedPage from './passwordProtectedPage.tsx';
import Home from './home.tsx';
import Contact from './contact.tsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const handleEmailClick = () => {
    const emailAddress = 'your-email@example.com';
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" component={Link} to="/home">Home</Button>
              <Button color="inherit" component={Link} to="/coursework">Coursework</Button>
              <Button color="inherit" component={Link} to="/passwordprotectedPage">Memories</Button>
              {/* Use onClick to trigger email composition */}
              <Button color="inherit" onClick={handleEmailClick}>Contact</Button>
            </Toolbar>
          </AppBar>
          <Routes>
            {/* Set the default route to /home */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/coursework" element={<Coursework />} />
            <Route path="/passwordprotectedPage" element={<PasswordProtectedPage />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
