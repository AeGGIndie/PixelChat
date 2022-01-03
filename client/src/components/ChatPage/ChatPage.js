import React from "react";
import ChatBox from "./ChatBox";
import { Box } from "@mui/material";

const ChatPage = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    >
      <ChatBox />
    </Box>
  );
}


export default ChatPage;