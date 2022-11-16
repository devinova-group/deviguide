import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { theme } from "../theme/theme";
import NavBar from "./Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
