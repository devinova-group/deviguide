import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ThemeProvider} from "theme-ui";
import {theme} from "../theme/theme";
import NavBar from "./Navbar";
import Sidebar_left from "./Sidebar_left";

export default function App({Component, pageProps}: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
