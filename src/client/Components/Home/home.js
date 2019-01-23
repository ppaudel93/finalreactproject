import React, { Component } from "react";
import styles from "../../../static/style/styles";
import NavBar from "../AppBar/navBar";
import { withStyles } from "@material-ui/core";
import { WordnikKey, giphyKey } from "../../../../API_KEYS";

const wordnikUrl = `https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&api_key=${WordnikKey}`;
const giphyUrl = `http://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=hello`;

class Home extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
