import React, { useState } from "react";
import { Box } from '@mui/material';
import FormInput from "./FormInput";

const NameInput = (props) => {
  return (
    <Box
      sx={{
        border: 'solid',
        borderRadius: 3,
        borderColor: 'white',
        bgcolor: 'white',
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{
        width: '80%',
        mb: 2,
      }}
      >
        <FormInput setUserString={props.setUser} />
      </Box>
    </Box>
  );
};

export default NameInput;