import React, { Component } from "react";
import {
  Paper,
  Typography,
  Button,
  Grid,
  withStyles,
  TextField,
  Link,
  CircularProgress
} from "@material-ui/core";
import PropTypes from "prop-types";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styles from "../../../static/style/styles";
import { changeEmailLogin, changePasswordLogin } from "./loginModule";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const mapStateToprops = state => ({
  email: state.login.email,
  password: state.login.password
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeEmailLogin, changePasswordLogin }, dispatch);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProgressBar: false,
      buttonDisabled: false
    };
  }
  componentDidMount() {
    document.title = "Login";
  }
  handleButtonClick = () => {
    this.setState({
      displayProgressBar: !this.state.displayProgressBar,
      buttonDisabled: !this.state.buttonDisabled
    });
    setTimeout(() => {
      this.setState({
        displayProgressBar: !this.state.displayProgressBar,
        buttonDisabled: !this.state.buttonDisabled
      });
    }, 3000);
  };

  handleEmailChange = e => {
    this.props.changeEmailLogin(e.target.value);
  };
  handlePasswordChange = e => {
    this.props.changePasswordLogin(e.target.value);
  };
  render() {
    let newStyles = {
      progressBar: {
        display: this.state.displayProgressBar ? "block" : "none"
      }
    };
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
                    value={this.props.email}
                    onChange={this.handleEmailChange}
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
                    value={this.props.password}
                    onChange={this.handlePasswordChange}
                  />
                </Grid>
              </Grid>
              <CircularProgress
                style={newStyles.progressBar}
                className={classes.progressBar}
              />
              <Grid item xs={12} sm={12}>
                <Grid container justify="center">
                  <Button
                    className={classes.button}
                    color="primary"
                    variant="contained"
                    onClick={this.handleButtonClick}
                    disabled={this.state.buttonDisabled}
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
  classes: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeEmailLogin: PropTypes.func.isRequired,
  changePasswordLogin: PropTypes.func.isRequired
};

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(withStyles(styles)(Login));
