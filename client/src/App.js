import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "./components/Theme";
import PageLayout from "./components/PageLayout";
import UsernameProvider from "./components/UsernameProvider";

const App = () => {
  return (
    <Theme>
      <CssBaseline />
      <UsernameProvider>
        <PageLayout />
      </UsernameProvider>
    </Theme>
  );
};

export default App;
