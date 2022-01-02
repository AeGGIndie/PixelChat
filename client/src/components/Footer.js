import { Typography, Link, Box } from "@mui/material"
import { useTheme } from "@mui/material/styles";


const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ 
      height: '10vh',
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.background.paper,
     }}>
      <Typography variant="body1">
        {"Created with 💙 by "}
        <Link color="inherit" href="https://twitter.com/jasonktan_">
          Jason Kyle Tan
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;