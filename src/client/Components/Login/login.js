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
import { changeEmailLogin, changePasswordLogin, login } from "./loginModule";
import { toggleLoggedIn, changeCurrentUser } from "../AppBar/navBarModule";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import bcrypt from "bcrypt-nodejs";

const mapStateToprops = state => ({
  email: state.login.email,
  password: state.login.password,
  loggedIn: state.navBar.loggedIn,
  currentUser: state.navBar.currentUser
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeEmailLogin,
      changePasswordLogin,
      login,
      toggleLoggedIn,
      changeCurrentUser
    },
    dispatch
  );

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProgressBar: false,
      buttonDisabled: false,
      emailEmptyError: false,
      emailRegexError: false,
      passwordEmptyError: false,
      emailErrorMessage: "",
      passwordErrorMessage: "",
      errorStatus: true
    };
  }
  handleProgressBar = () => {
    this.props.toggleProgressBar();
  };
  changeErrorStatus = boolean =>
    this.setState({ errorStatus: boolean }, () =>
      console.log(this.state.errorStatus)
    );
  inverter = name => {
    if (name === "emailEmptyError") this.setState({ emailEmptyError: true });
    if (name === "emailRegexError") this.setState({ emailRegexError: true });
    if (name === "passwordEmptyError")
      this.setState({ passwordEmptyError: true });
  };
  changeErrorMessage = name => {
    if (name === "emailEmpty") {
      this.setState({ emailErrorMessage: "Email cannot be empty" });
    }
    if (name === "passwordEmpty") {
      this.setState({ passwordErrorMessage: "Password cannot be empty" });
    }
    if (name === "emailRegex") {
      this.setState({ emailErrorMessage: "Email is invalid" }, () =>
        console.log(this.state.emailErrorMessage)
      );
    }
  };
  handleLoginClick = () => {
    let email = this.props.email;
    let password = this.props.password;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.inverter("emailRegexError");
      this.changeErrorMessage("emailRegex");
      this.changeErrorStatus(true);
    }
    if (email === "") {
      this.inverter("emailEmptyError");
      this.changeErrorMessage("emailEmpty");
      this.changeErrorStatus(true);
    }
    if (password === "") {
      this.inverter("passwordEmptyError");
      this.changeErrorMessage("passwordEmpty");
      this.changeErrorStatus(true);
    }

    if (this.state.errorStatus === true) {
      return;
    } else {
      this.setState(
        {
          displayProgressBar: !this.state.displayProgressBar,
          buttonDisabled: !this.state.buttonDisabled
        },
        () => {
          let hash = bcrypt.hashSync(password);
          console.log(hash);
          this.props.login({ email, password });
          this.setState({
            displayProgressBar: !this.state.displayProgressBar,
            buttonDisabled: !this.state.buttonDisabled
          });
        }
      );
    }
  };
  componentDidMount() {
    document.title = "Login";
  }

  handleEmailChange = e => {
    this.props.changeEmailLogin(e.target.value);
    this.setState({
      emailEmptyError: false,
      emailRegexError: false,
      emailErrorMessage: ""
    });
    this.changeErrorStatus(false);
  };
  handlePasswordChange = e => {
    this.props.changePasswordLogin(e.target.value);
    this.setState({ passwordEmptyError: false, passwordErrorMessage: "" });
    this.changeErrorStatus(false);
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
                    error={
                      this.state.emailEmptyError
                        ? this.state.emailEmptyError
                        : this.state.emailRegexError
                    }
                    helperText={this.state.emailErrorMessage}
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
                    error={this.state.passwordEmptyError}
                    helperText={this.state.passwordErrorMessage}
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
                    onClick={this.handleLoginClick}
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
  login: PropTypes.func.isRequired,
  changeEmailLogin: PropTypes.func.isRequired,
  changePasswordLogin: PropTypes.func.isRequired
};

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(withStyles(styles)(Login));
