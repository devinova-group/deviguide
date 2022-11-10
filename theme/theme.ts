import type {Theme} from "theme-ui";

export const theme: Theme = {
  // initialColorModeName: "light",
  colors: {
    primary: "#885FFF",
    cardBackground: `rgba(255, 255, 255, 0.3)`,
    cardShadow: `0px 4px 21px 8px rgba(0, 0, 0, 0.25)`,
    cardBorder: `1px solid rgba(255, 255, 255, 0.01)`,
    cardRadius: `16px`,
    modes: {
      dark: {
        primary: "black",
        cardBackground: `rgba(107, 98, 120, 0.7)`,
        cardShadow: `4px 4px 21px 8px rgba(0, 0, 0, 0.25)`,
        cardBorder: `1px solid rgba(255, 255, 255, 0.01)`,
        cardRadius: `20px`,
      },
    },
  },
};
