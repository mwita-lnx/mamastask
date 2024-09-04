import React from 'react';
import { Container, Typography } from '@mui/material';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

const Home: React.FC = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get('name');
  const age = queryParams.get('age');

  return (
    <Container>
      <Typography variant="h4">Welcome {name}</Typography>
      <Typography>Your age is {age}</Typography>
    </Container>
  );
};

export default App;
