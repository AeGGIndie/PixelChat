import React, { useState } from 'react';
import {
  Box,
} from "@mui/material";
import Landing from "./LandingPage/Landing";

const Content = () => {
  const [username, setUsername] = useState('');

  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mr: '0.75rem',
        ml: '0.75rem',
      }}
    >
      {!username ? <Landing setUser={setUsername} /> : <div>Design Chat Page</div>}
    </Box>
  );
};

export default Content;