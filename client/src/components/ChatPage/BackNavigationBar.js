import { 
  AppBar,
  Toolbar,
  IconButton,
 } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function BackNavigationBar(){
  return(
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}