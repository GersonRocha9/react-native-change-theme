import { StatusBar } from "expo-status-bar";
import { Theme } from "./src/templates/theme";
import { Home } from "./src/pages/Home/index";

import AppProvider from "./src/contexts";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppProvider>
        <Theme>
          <Home />
        </Theme>
      </AppProvider>
    </>
  );
}
