import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0b72b9";
const arcOrange = "#ffba60";

export const theme = createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    h3: {
      fontFamily: "Raleway",
      fontSize: "2.3rem",
      fontWeight: 700,
      color: `${arcBlue}`,
    },
    body2: {
      color: "#868686",
      fontSize: "1.1rem",
      fontWeight: 300,
      lineHeight: "24px",
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: "2.43rem",
      fontWeight: 700,
      color: `${arcBlue}`,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      fontWeight: 700,
      color: `${arcBlue}`,
    },
    h6: {
      fontFamily: "Raleway",
      fontSize: "1.35rem",
      fontWeight: 700,
      color: `${arcBlue}`,
    },
    h5: {
      fontFamily: "Pacifico",
      fontSize: "2rem",
      textTransform: "none",
      color: `${arcBlue}`,
    },
    subtitle1: {
      color: "#868686",
      fontFamily: "Raleway",
      fontWeight: 400,
      fontSize: "1.05rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
    },
  },
});
