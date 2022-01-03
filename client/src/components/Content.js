import React from 'react';
import {
  Box,
} from "@mui/material";
import Landing from "./LandingPage/Landing";
import ChatPage from "./ChatPage/ChatPage";

const Content = (props) => {

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
      {!props.username ? <Landing setUser={props.setUsername} /> : <ChatPage />}
    </Box>
  );
};

export default Content;