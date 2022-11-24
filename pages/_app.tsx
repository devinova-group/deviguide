import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ThemeProvider} from "theme-ui";
import {theme} from "../theme/theme";
import NavBar from "./Navbar";
import lightmode from "./Background.jpg";

export default function App({Component, pageProps}: AppProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${lightmode.src})`,
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <ThemeProvider theme={theme}>
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
