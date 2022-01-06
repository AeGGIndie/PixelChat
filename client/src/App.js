import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "./components/Theme";
import PageLayout from "./components/PageLayout";

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <Theme>
      <CssBaseline />
      <PageLayout />
    </Theme>
  );
};

export default App;
