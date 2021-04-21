import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#121213",
      paper: "#191819",
    },
    primary: {
      main: "#1DB954",
    },
  },
});

export default theme;
