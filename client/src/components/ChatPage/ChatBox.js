import React, { useEffect, useState } from "react";
import { Box, Paper, InputBase, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";
import { useSocket } from "../utils/SocketProvider";

const messages = [
  {
    user: "Jason",
    message: {
      content: "Hello World!",
      createdAt: "TODO: Date Object",
    },
    userID: "7fhed32",
  },
  {
    user: "Kyle",
    message: {
      content: "But the world is empty ;-; who're you talking to brother.",
      createdAt: "TODO: Date Object",
    },
    userID: "09kdo9ac2",
  },
  {
    user: "Steven",
    message: {
      content:
        "Semen is an interesting phenomeneon to which that cannot be compreheneded by most humans. Thus forth, ought to be impossible to swallow such sweet delicacy.",
      createdAt: "TODO: Date Object",
    },
    userID: "2918jmm,",
  },
];

const useStyles = makeStyles({
  chatBox: {
    backgroundColor: "white",
    color: "#000",
    overflow: "scroll",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
});

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const classes = useStyles();
  const { socket } = useSocket();

  // Handle Change for Message
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  // Handle Submit
  const handleSubmit = (event) => {
    socket.emit("MESSAGE_SEND", message);
    setMessage("");
    event.preventDefault();
  };

  return (
    <>
      {/* Message Chat */}
      <Box
        sx={{
          height: "100%",
          width: "100vw",
        }}
        className={classes.chatBox}
      >
        {/* Render messages here */}
      </Box>
      {/* Send Message */}
      <form onSubmit={handleSubmit}>
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{
              ml: 2,
            }}
            name="message"
            size="medium"
            placeholder="Message"
            fullWidth
            multiline
            maxRows={20}
            value={message}
            onChange={handleChange}
          />
          <IconButton type="submit" color="secondary" size="large">
            <SendIcon />
          </IconButton>
        </Paper>
      </form>
    </>
  );
};

export default ChatBox;
