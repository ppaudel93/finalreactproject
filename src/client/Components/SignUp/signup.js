import React, { Component } from "react";
import {
  Grid,
  Button,
  withStyles,
  Paper,
  withWidth,
  TextField,
  Input,
  IconButton,
  Tooltip,
  MenuItem,
  Checkbox,
  Typography
} from "@material-ui/core";
import styles from "../../../static/style/styles";
import AddAPhoto from "@material-ui/icons/AddAPhoto";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import { countryList } from "../../../static/JS/countryList";
import { Genders } from "../../../static/JS/Genders";
import { connect } from "react-redux";
import {
  changeAddressRegister,
  changeBirthdayRegister,
  changeCountryRegister,
  changeEmailConfirmRegister,
  changeEmailRegister,
  changeFirstnameRegister,
  changeGenderRegister,
  changeLastnameRegister,
  changePasswordConfirmRegister,
  changePasswordRegister,
  register
} from "./signupModule";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import bcrypt from "bcrypt-nodejs";

class SignUp extends Component {
  state = {
    selectedDate: null,
    country: "",
    gender: "",
    termsAccepted: false,
    emailError: false
  };
  handleRegister = () => {
    let firstname = this.props.firstname;
    let lastname = this.props.lastname;
    let email = this.props.email;
    let password = bcrypt.hashSync(this.props.password);
    let birthday = this.props.birthday;
    let gender = this.props.gender;
    let country = this.props.country;
    let address = this.props.address;
    this.props.register({
      firstname,
      lastname,
      email,
      password,
      birthday,
      gender,
      country,
      address
    });
  };
  handlePasswordConfirmChange = e => {
    this.props.changePasswordConfirmRegister(e.target.value);
  };
  handlePasswordChange = e => {
    this.props.changePasswordRegister(e.target.value);
  };
  handleLastnameChange = e => {
    this.props.changeLastnameRegister(e.target.value);
  };
  handleGenderChange = n => e => {
    this.props.changeGenderRegister(e.target.value);
  };
  handleFirstnameChange = e => {
    this.props.changeFirstnameRegister(e.target.value);
  };
  handleEmailConfirmChange = e => {
    this.props.changeEmailConfirmRegister(e.target.value);
  };
  handleEmailChange = e => {
    this.props.changeEmailRegister(e.target.value);
  };
  handleCountryChange = n => e => {
    this.props.changeCountryRegister(e.target.value);
  };
  handleBirthdayChange = date => {
    this.props.changeBirthdayRegister(date);
  };
  handleAddressChange = e => {
    this.props.changeAddressRegister(e.target.value);
  };
  handleFileButtonClick = () => {
    document.getElementById("register-file").click();
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  invertTerms = () => {
    this.setState({ termsAccepted: !this.state.termsAccepted });
  };
  render() {
    const { width } = this.props;
    document.title = "Sign Up";
    const { classes } = this.props;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.root} justify="center">
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Grid container justify="center">
              <Paper className={classes.paperRegister} elevation={1}>
                <Grid container justify="center" spacing={0}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid container justify="center">
                      <input
                        type="file"
                        id="register-file"
                        style={{ display: "none" }}
                        accept="image/*"
                      />
                      <Tooltip title="Upload Profile Picture">
                        <IconButton onClick={this.handleFileButtonClick}>
                          <AddAPhoto
                            color="primary"
                            className={classes.addPhoto}
                          />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container justify="center">
                      <TextField
                        id="register-firstname"
                        label="First Name"
                        className={classes.textField}
                        margin="normal"
                        type="text"
                        value={this.props.firstname}
                        onChange={this.handleFirstnameChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container justify="center">
                      <TextField
                        id="register-lastname"
                        label="Last Name"
                        className={classes.textField}
                        margin="normal"
                        type="text"
                        value={this.props.lastname}
                        onChange={this.handleLastnameChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container justify="center">
                      <TextField
                        id="register-email"
                        label="E-mail"
                        className={classes.textField}
                        margin="normal"
                        type="email"
                        value={this.props.email}
                        onChange={this.handleEmailChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container justify="center">
                      <TextField
                        id="register-confirm-email"
                        label="Confirm E-mail"
                        className={classes.textField}
                        margin="normal"
                        type="email"
                        value={this.props.confirmEmail}
                        onChange={this.handleEmailConfirmChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container justify="center">
                      <TextField
                        id="register-password"
                        label="Password"
                        className={classes.textField}
                        margin="normal"
                        type="password"
                        value={this.props.password}
                        onChange={this.handlePasswordChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container justify="center">
                      <TextField
                        id="register-confirm-password"
                        label="Confirm Password"
                        className={classes.textField}
                        margin="normal"
                        type="password"
                        value={this.props.confirmPassword}
                        onChange={this.handlePasswordConfirmChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container justify="center">
                      <Tooltip title="Birthday">
                        <DatePicker
                          value={this.props.birthday}
                          label="Birthday"
                          onChange={this.handleBirthdayChange}
                          format="dd/MM/yyyy"
                          className={classes.textField}
                          style={{ marginTop: 15 }}
                        />
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container justify="center">
                      <TextField
                        id="register-gender"
                        label="Gender"
                        className={classes.textField}
                        margin="normal"
                        select
                        value={this.props.gender}
                        onChange={this.handleGenderChange("gender")}
                        SelectProps={{
                          MenuProps: { className: classes.textField }
                        }}
                      >
                        {Genders.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container justify="center">
                      <TextField
                        id="register-country"
                        label="Country"
                        className={classes.textField}
                        margin="normal"
                        select
                        value={this.props.country}
                        onChange={this.handleCountryChange("country")}
                        SelectProps={{
                          MenuProps: { className: classes.textField }
                        }}
                      >
                        {countryList.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container justify="center">
                      <TextField
                        id="register-address"
                        label="Address"
                        className={classes.textField}
                        margin="normal"
                        type="text"
                        value={this.props.address}
                        onChange={this.handleAddressChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid style={{ marginTop: 15 }} item xs={12}>
                    <Grid container justify="flex-start">
                      <Checkbox
                        onChange={this.invertTerms}
                        className={classes.checkBox}
                        color="primary"
                      />
                      <Typography
                        style={{ marginTop: 10 }}
                        align="center"
                        variant="subtitle1"
                      >
                        I accept the terms and conditions.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justify="center">
                      <Button
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        disabled={!this.state.termsAccepted}
                        onClick={this.handleRegister}
                      >
                        Register
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}
const mapStateToProps = state => ({
  email: state.register.email,
  confirmEmail: state.register.confirmEmail,
  password: state.register.password,
  confirmPassword: state.register.confirmPassword,
  firstname: state.register.firstname,
  lastname: state.register.lastname,
  birthday: state.register.birthday,
  address: state.register.address,
  country: state.register.country,
  gender: state.register.gender
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeEmailRegister,
      changeEmailConfirmRegister,
      changePasswordRegister,
      changePasswordConfirmRegister,
      changeFirstnameRegister,
      changeLastnameRegister,
      changeAddressRegister,
      changeBirthdayRegister,
      changeCountryRegister,
      changeGenderRegister,
      register
    },
    dispatch
  );
SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  confirmEmail: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  birthday: PropTypes.object,
  address: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  changeEmailRegister: PropTypes.func.isRequired,
  changeEmailConfirmRegister: PropTypes.func.isRequired,
  changePasswordRegister: PropTypes.func.isRequired,
  changePasswordConfirmRegister: PropTypes.func.isRequired,
  changeFirstnameRegister: PropTypes.func.isRequired,
  changeLastnameRegister: PropTypes.func.isRequired,
  changeAddressRegister: PropTypes.func.isRequired,
  changeBirthdayRegister: PropTypes.func.isRequired,
  changeCountryRegister: PropTypes.func.isRequired,
  changeGenderRegister: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth()(withStyles(styles)(SignUp)));
