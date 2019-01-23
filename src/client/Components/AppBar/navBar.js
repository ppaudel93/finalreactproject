import React, { Component } from "react";
import {
  AppBar,
  withStyles,
  Toolbar,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  TextField,
  MenuItem,
  Button
} from "@material-ui/core";
import styles from "../../../static/style/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Home from "@material-ui/icons/Home";
import Settings from "@material-ui/icons/Settings";
import { numberList } from "../../../static/JS/numberList";

class NavBar extends Component {
  state = { settingsOpen: false, wordNum: 1, gifNum: 1, loggedIn: false };
  handlesettingsOpen = () => {
    this.setState({ settingsOpen: !this.state.settingsOpen });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    const { classes } = this.props;
    console.log(this.state);
    return (
      <div className={classes.root}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton color="inherit" href="/">
              <Home />
            </IconButton>
            <Typography
              align="center"
              variant="h6"
              color="inherit"
              className={classes.root}
            >
              Random GIF Generator
            </Typography>
            <IconButton color="inherit" onClick={this.handlesettingsOpen}>
              <Settings />
            </IconButton>
            <div>
              {this.state.loggedIn ? (
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
              ) : (
                <Button href="/login" size="small" variant="contained">
                  Login
                </Button>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Dialog
          open={this.state.settingsOpen}
          onClose={this.handlesettingsOpen}
        >
          <DialogTitle>Settings</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Select the settings suitable for you.
            </DialogContentText>
            <TextField
              fullWidth
              id="settings-words"
              label="Word Number"
              margin="normal"
              select
              value={this.state.wordNum}
              onChange={this.handleChange("wordNum")}
              SelectProps={{ MenuProps: { className: classes.TextField } }}
            >
              {numberList.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              id="settings-words"
              label="Gif Number"
              margin="normal"
              select
              value={this.state.gifNum}
              onChange={this.handleChange("gifNum")}
              SelectProps={{ MenuProps: { className: classes.TextField } }}
            >
              {numberList.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
