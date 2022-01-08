import React from "react";
import { Box } from "@mui/material";
import Landing from "./LandingPage/Landing";
import ChatPage from "./ChatPage/ChatPage";
import { useUsername } from "./utils/UsernameProvider";

const Content = () => {
  const { username } = useUsername();

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mr: "0.75rem",
        ml: "0.75rem",
      }}
    >
      {!username ? <Landing /> : <ChatPage />}
    </Box>
  );
};

export default Content;
