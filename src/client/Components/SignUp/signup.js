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

class SignUp extends Component {
  state = {
    selectedDate: null,
    country: "",
    gender: "",
    termsAccepted: false
  };
  handleFileButtonClick = () => {
    document.getElementById("register-file").click();
  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
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
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container justify="center">
                      <Tooltip title="Birthday">
                        <DatePicker
                          value={this.state.selectedDate}
                          label="Birthday"
                          onChange={this.handleDateChange}
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
                        value={this.state.gender}
                        onChange={this.handleChange("gender")}
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
                        value={this.state.country}
                        onChange={this.handleChange("country")}
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

export default withWidth()(withStyles(styles)(SignUp));
