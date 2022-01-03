import React, { useState } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Content from "./components/Content";
import Footer from "./components/Footer";


const theme = createTheme({
  palette: {
    primary: {
      main: '#4b67e4',
    },
    secondary: {
      main: '#4be4c8',
    },
    tertiary: {
      main: '#7b4be4',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196F3'
    },
    success: {
      main: '#4CAF50',
    },
    background: {
      default: '#3D3C3A',
      paper: 'rgba(88,88,88,0.8)',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(255,255,255,0.54)'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  typography: {
    fontFamily: [
      'Ubuntu Mono',
      'monospace'
    ].join(','),
    allVariants: {
      fontFamily: [
        'Ubuntu Mono',
        'monospace'
      ].join(','),
    },
    body: {
      fontSize: '1rem',
      '@media (min-width: 320px)': {
        fontSize: '0.9rem',
      },

    },
    h4: {
      fontFamily: [
        'Ubuntu Mono',
        'monospace'
      ].join(','),
      fontWeight: '700',
      fontSize: '2.5rem',
      letterSpacing: '0.001em',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Ubuntu Mono';
          font-style: normal;
          font-weight: 400,
          font-display: swap;
          src: local('Ubuntu Mono'), local('UbuntuMono-Regular'), url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap') format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    }
  }
});

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container direction="column">
        <Grid item>
          {
            !username ? null : 
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
          }
        </Grid>
        <Grid item container>
          <Grid item xs={1} sm={2} md={3} lg={4} /> 
          <Grid item xs={10} sm={8} md={6} lg={4} >
            <Content username={username} setUsername={setUsername} />
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={4} />
        </Grid>

        <Grid item>
          {!username ? <Footer /> : null}
        </Grid>

      </Grid>
    </ThemeProvider>
  );
};

export default App;
