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
    modes: {
      dark: {
        primary: "black",
        navPrimary: "#4A4458",
        linkPrimary: "#FFF",
        hoverPrimary: "#A689FF",
        cardBackground: `rgba(107, 98, 120, 0.7)`,
        
      },
    },
    styles: {
      deviCard: {
        background: "cardBackground",
        borderRadius: '20px',
        boxShadow: '4px 4px 21px 8px rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(255, 255, 255, 0.01)',
        padding: '10px',
        maxWidth: '735px'
      }
    }
  },
};
