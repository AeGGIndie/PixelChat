import { useState } from "react";
import UsernameField from "./UsernameField";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useUsername } from "../UsernameProvider";

const FormInput = () => {
  const { setUsername } = useUsername();
  // State of username
  const [inputString, setInputString] = useState("");

  // Form Input Handler
  // TODO: Store cookies of user
  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(inputString);
  };

  return (
    <form onSubmit={handleSubmit} action="POST">
      <UsernameField setUsername={setInputString} value={inputString} />
      <Button
        type="submit"
        sx={{
          height: 35,
          fontSize: "0.9em",
        }}
        fullWidth
        disableElevation
        color="primary"
        variant="contained"
        endIcon={<ArrowForwardIcon />}
      >
        Continue
      </Button>
    </form>
  );
};

export default FormInput;
