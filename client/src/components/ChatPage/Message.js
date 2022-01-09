import { Typography, Paper, Box } from "@mui/material";
import { useUsername } from "../utils/UsernameProvider";
import { useTheme } from "@mui/material/styles";

const Message = ({ message }) => {
  const currentUser = useUsername().username;
  const isCurrentUsersMessage = currentUser === message.user;
  const theme = useTheme();

  return (
    <Box
      sx={{
        ml: isCurrentUsersMessage ? "0px" : "10px",
        maxWidth: "90%",
        mb: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: isCurrentUsersMessage ? "flex-end" : "flex-start",
          margin: isCurrentUsersMessage ? "0px 2px 0px 0px" : "0px 0px 0px 2px",
        }}
      >
        {isCurrentUsersMessage ? "You" : message.user}
      </Typography>
      <Paper
        sx={{
          padding: "10px",
          margin: isCurrentUsersMessage ? "0px 0px 0px 0px" : "0px 0px 0px 0px",
          backgroundColor: isCurrentUsersMessage && theme.palette.primary.light,
        }}
      >
        <Typography>{message.content}</Typography>
      </Paper>
    </Box>
  );
};

export default Message;
