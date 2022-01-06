import { 
  Box,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";


const Header = () => {
  const theme = useTheme();
  return (
    <Box sx={{
        mt: '0.2em', 
        height: '5em',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Typography variant="h4" fontFamily={theme.typography['fontFamily']} fontWeight={theme.typography.fontWeightBold} >PixelChat</Typography>
    </Box>
  );
};

export default Header;