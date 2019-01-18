import { createMuiTheme } from "@material-ui/core/styles";
import { blue, green, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: green[500] },
    error: { main: red[500] }
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;
