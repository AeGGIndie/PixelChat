import React, { useState } from "react";
import { Box, Button, TextField } from '@mui/material';
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Form Styles
const useStyles = makeStyles({
  input: {
    color: '#000',
  },
  placeholder: {
    color: '#3c3c3c',
  },
});


// Landing Page Form Elements 
const FormInput = ({ setUserString }) => {
  const [inputString, setInputString] = useState({ value: '' });

  // Input Box Handler
  const handleChange = (event) => {
    setInputString({ value: event.target.value });
  }

  // Form Input Handler
  // TODO: Create user
  const handleSubmit = (event) => {
    event.preventDefault();
    setUserString(inputString.value);
  }

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} action="POST"> 
      <TextField value={inputString.value}  onChange={handleChange}  InputProps={{ className: classes.input }} InputLabelProps={{ className: classes.placeholder }} required name="username" label="Username" variant="outlined" margin="normal" fullWidth/>
      <Button type="submit" fullWidth disableElevation color="primary" variant="contained" endIcon={<ArrowForwardIcon />}>
        Continue
      </Button>
    </form>
  )
}

const NameInput = (props) => {
  return (
    <Box
      sx={{
        border: 'solid',
        borderRadius: 12,
        borderColor: 'white',
        bgcolor: 'white',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{
        width: '75%',
        mb: 2,
      }}
      >
        <FormInput setUserString={props.setUser} />
      </Box>
    </Box>
  );
};

export default NameInput;