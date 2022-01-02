import React from 'react';
import { 
  Grid, 
  AppBar, 
  Avatar,
  IconButton,
  Toolbar, 
  Typography,
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
  <AppBar position="static">
    <Toolbar>
      <Typography className={classes.typographyStyles}>Jason Kyle Tan</Typography>
      <BeenhereIcon />
    </Toolbar>
  </AppBar>
  );
};

/* Card */
const CoffeeCard = ({avatarSrc, title, subtitle, description, imgSrc}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        avatar={
          <Avatar src={avatarSrc}/>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />

      <CardMedia
        component="img"
        height="150"
        image={imgSrc}
      />

      <CardContent>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
};


const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>
        <CoffeeCard 
        title="Keurig K-Duo" 
        avatarSrc="https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png"
        subtitle="$149.99"
        description="Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296, or 355ml (8, 10, or 12 oz. ) cup "
        imgSrc="https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg"
        />
      </Grid>
      
    </Grid>
  );
};

const App = () => {
  return(
   <Grid container direction="column" spacing={{ xs: 2, sm: 3 }}>
     <Grid item>
       <Header />
     </Grid>
     <Grid item container>
       {/* On screens considered "xs", there are no margins,
           On screens considered "sm", the margins take up 2 of grid
       */}
       <Grid item xs={0} sm={2} /> 
       <Grid item xs={12} sm={8}>
         <Content />
       </Grid>
       <Grid item xs={0} sm={2} />
     </Grid>
   </Grid>
  );
}

export default App;
