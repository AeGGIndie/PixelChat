import React, { useState } from "react";
import { Box, Paper, InputBase, IconButton, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";
import { useUsername } from "../utils/UsernameProvider";
import { useSocket } from "../utils/SocketProvider";

const sampleMessages = [
  {
    user: "Jason",
    content: "Hello World!",
    createdAt: "TODO: Date Object",
    userID: "7fhed32",
  },
  {
    user: "Kyle",
    content: "But the world is empty ;-; who're you talking to brother.",
    createdAt: "TODO: Date Object",
    userID: "09kdo9ac2",
  },
  {
    user: "Steven",
    content:
      "Semen is an interesting phenomeneon to which that cannot be compreheneded by most humans. Thus forth, ought to be impossible to swallow such sweet delicacy.",
    createdAt: "TODO: Date Object",
    userID: "2918jmm,",
  },
  {
    user: "Jason",
    content: "Hello World!",
    createdAt: "TODO: Date Object",
    userID: "7fhed32",
  },
  {
    user: "Kyle",
    content: "But the world is empty ;-; who're you talking to brother.",
    createdAt: "TODO: Date Object",
    userID: "09kdo9ac2",
  },
  {
    user: "Steven",
    content:
      "Semen is an interesting phenomeneon to which that cannot be compreheneded by most humans. Thus forth, ought to be impossible to swallow such sweet delicacy.",
    createdAt: "TODO: Date Object",
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
  const [messages, setMessages] = useState(sampleMessages);
  const classes = useStyles();
  const { socket } = useSocket();
  const currentUser = useUsername().username;

  // Handle Change for Message
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  // Handle Submit
  const handleSubmit = (event) => {
    socket.emit("MESSAGE_SEND", message);
    const newMessage = {
      user: currentUser,
      content: message,
      createdAt: Date.now(),
      userID: "TODO: Generate unique ID's",
    };
    sampleMessages.push(newMessage);
    setMessages(sampleMessages);
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
        <Grid container>
          {messages.map((msg, index) => {
            return (
              <>
                <Grid item xs={0.5} />
                <Grid
                  item
                  container
                  xs={11}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent:
                      currentUser === msg.user ? "flex-end" : "flex-start",
                  }}
                >
                  <Message message={msg} />
                </Grid>
                <Grid item xs={0.5} />
              </>
            );
          })}
        </Grid>
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
