import React, { Component } from "react";
import {
  Paper,
  Typography,
  Button,
  Grid,
  withStyles,
  TextField,
  Link
} from "@material-ui/core";
import PropTypes from "prop-types";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styles from "../../../static/style/styles";

class Login extends Component {
  render() {
    document.title = "Login";
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center">
            <Paper className={classes.paper} elevation={1}>
              <Grid item xs={12} sm={12}>
                <Grid container justify="center">
                  <AccountCircleIcon
                    color="primary"
                    className={classes.accountCircle}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid container justify="center">
                  <TextField
                    id="login-username"
                    label="E-mail"
                    className={classes.textField}
                    margin="normal"
                    type="email"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Grid container justify="center">
                  <TextField
                    id="login-password"
                    label="Password"
                    className={classes.textField}
                    margin="normal"
                    type="password"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Grid container justify="center">
                  <Button
                    className={classes.button}
                    color="primary"
                    variant="contained"
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
              <Grid item cs={12} sm={12}>
                <Grid container justify="center">
                  <Typography align="center" variant="subtitle1">
                    Don't have an account?
                    <Link variant="inherit" href="/signup">
                      &nbsp;Sign Up
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
