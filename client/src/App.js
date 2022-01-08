import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "./components/Theme";
import PageLayout from "./components/PageLayout";
import UsernameProvider from "./components/utils/UsernameProvider";
import SocketProvider from "./components/utils/SocketProvider";

const App = () => {
  return (
    <Theme>
      <CssBaseline />
      <SocketProvider>
        <UsernameProvider>
          <PageLayout />
        </UsernameProvider>
      </SocketProvider>
    </Theme>
  );
};

export default App;
