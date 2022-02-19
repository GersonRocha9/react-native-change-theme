import React from "react";

import { ThemeProvider } from "./theme";

// creating the provider
const AppProvider: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
