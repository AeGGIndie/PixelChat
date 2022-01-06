import React from "react";
import {
  Box,
  Paper,
  InputBase,
  IconButton
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SendIcon from '@mui/icons-material/Send';
import Message from "./Message";

const useStyles = makeStyles({
  chatBox: {
    backgroundColor: 'white',
    color: '#000',
    overflow: 'scroll',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
});

const ChatBox = () => {
  // Handle Submit 
  const handleSubmit = (event) => {
    console.log('TODO: Send a message');
    event.preventDefault();
  }

  const classes = useStyles();
  return (
    <>
      {/* Message Chat */}
      <Box sx={{
        height: '100%',
        width: '100vw',
      }} className={classes.chatBox} >
        {/* Render messages here */}
        <Message />
      </Box>
      {/* Send Message */}
      <form onSubmit={handleSubmit}>
        <Paper sx={{
          display: 'flex',
          alignItems: 'center',
        }}
        >
          <InputBase sx={{
            ml: 2,
          }}
          name="message"
          size="medium"
          placeholder="Message"
          fullWidth
          multiline
          maxRows={20}
          />
          <IconButton type="submit" color='secondary' size='large'>
            <SendIcon/>
          </IconButton>
        </Paper>
      </form>
    </>
  );
};

export default ChatBox;