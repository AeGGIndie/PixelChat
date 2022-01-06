import { Grid } from "@mui/material";
import BackNavigationBar from "./ChatPage/BackNavigationBar";
import Content from "./Content";
import Footer from "./Footer";

export default function PageLayout(){
  return(
    <Grid container direction="column">
        <Grid item>
          {/** Navigation Bar Conditional Render on Login */}
          {
            username && 
              <BackNavigationBar/>
          }
        </Grid>
        <Grid item container>
          <Grid item xs={1} sm={2} md={3} lg={4} /> 
          <Grid item xs={10} sm={8} md={6} lg={4} >
          {/** Start of Content */}
            <Content 
              username={username} 
              setUsername={setUsername}
             />
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={4} />
        </Grid>

        <Grid item>
          {/** Conditional render on footer */}
          {!username && <Footer />}
        </Grid>

      </Grid>
  );
}

