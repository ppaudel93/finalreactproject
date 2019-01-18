import React, { Component } from "react";
import { Grid, Button, withStyles, Paper, withWidth } from "@material-ui/core";
import styles from "../../../static/style/styles";

class SignUp extends Component {
  render() {
    const { width } = this.props;
    console.log(width);
    document.title = "Sign Up";
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center">
            <Paper className={classes.paper} elevation={1}>
              <Grid container justify="center">
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Button>asdasd</Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Button>asdasd</Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Button>asdasd</Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Button>asdasd</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withWidth()(withStyles(styles)(SignUp));
