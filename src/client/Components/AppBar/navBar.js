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
  Button,
  Menu
} from "@material-ui/core";
import styles from "../../../static/style/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Home from "@material-ui/icons/Home";
import Settings from "@material-ui/icons/Settings";
import { numberList } from "../../../static/JS/numberList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  toggleLoggedIn,
  changeCurrentUser,
  changeWordNum,
  changeGifNum
} from "./navBarModule";
import PropTypes from "prop-types";

const mapStateToProps = state => ({
  loggedIn: state.navBar.loggedIn,
  currentUser: state.navBar.currentUser,
  wordNum: state.navBar.wordNum,
  gifNum: state.navBar.gifNum
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { toggleLoggedIn, changeCurrentUser, changeWordNum, changeGifNum },
    dispatch
  );

class NavBar extends Component {
  state = { settingsOpen: false, anchorEl: null, mobileMoreAnchorEl: null };
  handleWordChange = name => e => {
    this.props.changeWordNum(e.target.value);
  };
  handleGifChange = name => e => {
    this.props.changeGifNum(e.target.value);
  };
  handlesettingsOpen = () => {
    this.setState({ settingsOpen: !this.state.settingsOpen });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleLogout = () => {
    this.props.toggleLoggedIn(false);
    this.props.changeCurrentUser("");
    this.handleClose();
    localStorage.clear();
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    console.log(this.state);
    const isMenuOpen = Boolean(this.state.anchorEl);
    const renderMenu = (
      <Menu
        MenuListProps={{ className: classes.textField }}
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
      </Menu>
    );
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
              {Boolean(this.props.loggedIn) ? (
                <div>
                  <IconButton onClick={this.handleMenu} color="inherit">
                    <AccountCircle />
                  </IconButton>
                  {renderMenu}
                </div>
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
              value={this.props.wordNum}
              onChange={this.handleWordChange("wordNum")}
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
              value={this.props.gifNum}
              onChange={this.handleGifChange("gifNum")}
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
NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  currentUser: PropTypes.string,
  wordNum: PropTypes.number.isRequired,
  gifNum: PropTypes.number.isRequired,
  toggleLoggedIn: PropTypes.func.isRequired,
  changeCurrentUser: PropTypes.func.isRequired,
  changeWordNum: PropTypes.func.isRequired,
  changeGifNum: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NavBar));
