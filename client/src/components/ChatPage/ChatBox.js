import React from "react";
import {
  Box,
  Paper,
  InputBase,
  IconButton
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import SendIcon from '@mui/icons-material/Send';

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

const ChatBox = (props) => {
  const theme = useTheme();

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
        Design Chat Page
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
          size="medium"
          placeholder="Message"
          fullWidth
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