import type {Theme} from "theme-ui";
import dark from "../pages/Dark.jpg"
import lightmode from "../pages/Background.jpg"

export const theme: Theme = {
  // initialColorModeName: "light",
  colors: {
    primary: "#885FFF",
    navPrimary: "#FFFEFB",
    linkPrimary: "#585858",
    hoverPrimary: "#6044B5",
    backGround: `url(${lightmode})`,
    modes: {
      dark: {
        primary: "black",
        navPrimary: "#4A4458",
        linkPrimary: "#FFF",
        hoverPrimary: "#A689FF",
        backGround: `url(${dark})`,
      },
    },
  },
};
