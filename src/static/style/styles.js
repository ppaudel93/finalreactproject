const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    marginTop: theme.spacing.unit * 15,
    padding: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 8,
    paddingRight: theme.spacing.unit * 8,
    minWidth: 400,
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      padding: 0,
      marginTop: 0
    },
    [theme.breakpoints.only("md")]: {
      marginTop: theme.spacing.unit * 25
    }
  },
  textField: {
    width: 250,
    [theme.breakpoints.only("md")]: {
      width: 350
    }
  },
  accountCircle: {
    width: 150,
    height: 150,
    [theme.breakpoints.down("sm")]: {
      marginTop: 150
    }
  },
  button: {
    margin: theme.spacing.unit * 2
  }
});

export default styles;
