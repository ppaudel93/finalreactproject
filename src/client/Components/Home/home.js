import React, { Component } from "react";
import styles from "../../../static/style/styles";
import NavBar from "../AppBar/navBar";
import {
  withStyles,
  Card,
  CardHeader,
  Avatar,
  Grid,
  CardMedia,
  Paper,
  Typography
} from "@material-ui/core";
import { WordnikKey, giphyKey } from "../../../../API_KEYS";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const invokeWordnikUrl = wordNum => {
  return `https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=${wordNum}&api_key=${WordnikKey}`;
};
const invokeGiphyUrl = (gifNum, word) => {
  return `http://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${word}&limit=${gifNum}`;
};

const mapStateToProps = state => ({
  wordNum: state.navBar.wordNum,
  gifNum: state.navBar.gifNum
});

class Home extends Component {
  state = {
    randomWords: [],
    generatedGifs: []
  };
  componentDidMount() {
    this.getData(this.props.wordNum, this.props.gifNum);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.wordNum !== this.props.wordNum ||
      nextProps.gifNum !== this.props.gifNum
    ) {
      this.getData(nextProps.wordNum, nextProps.gifNum);
      return true;
    } else {
      console.log("new props received");
      return true;
    }
  }

  getData = (wordNum, gifNum) => {
    fetch(invokeWordnikUrl(wordNum))
      .then(data => data.json())
      .then(data => {
        console.log(data);
        console.log(wordNum);
        this.setState({ randomWords: data });
        this.setState({ generatedGifs: [] }, () => {
          for (let item of data) {
            fetch(invokeGiphyUrl(gifNum, item.word))
              .then(data => data.json())
              .then(data => {
                console.log(data);
                this.setState({
                  generatedGifs: this.state.generatedGifs.concat(data)
                });
              });
          }
        });
      });
  };
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.state);
    console.log(this.state.generatedGifs[5]);
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container justify="center">
              {this.state.randomWords.map(item => (
                <Paper
                  key={item.id}
                  className={classes.paperHome}
                  elevation={1}
                >
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container justify="center">
                      <Avatar className={classes.avatar}>
                        {this.state.randomWords.indexOf(item) + 1}
                      </Avatar>
                      <Typography
                        className={classes.typoGraphy}
                        align="center"
                        variant="h2"
                      >
                        {item.word}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container justify="center">
                      {this.state.generatedGifs[
                        this.state.randomWords.indexOf(item)
                      ] === undefined ? (
                        <Card className={classes.card}>
                          <CardHeader
                            style={{ marginTop: 1 }}
                            title="No GIFs found"
                          />
                          <CardMedia
                            className={classes.media}
                            image="https://media.giphy.com/media/3oEjHGrVGrqgFFknfO/giphy.gif"
                            title="No Gifs Found"
                          />
                        </Card>
                      ) : this.state.generatedGifs[
                          this.state.randomWords.indexOf(item)
                        ].data.length === 0 ? (
                        <Card className={classes.card}>
                          <CardHeader
                            style={{ marginTop: 1 }}
                            title="No GIFs found"
                          />
                          <CardMedia
                            className={classes.media}
                            image="https://media.giphy.com/media/3oEjHGrVGrqgFFknfO/giphy.gif"
                            title="No GIFs found"
                          />
                        </Card>
                      ) : (
                        this.state.generatedGifs[
                          this.state.randomWords.indexOf(item)
                        ].data.map(item => (
                          <Card key={item.id} className={classes.card}>
                            <CardHeader
                              style={{ marginTop: 1 }}
                              title={item.title}
                            />
                            <CardMedia
                              className={classes.media}
                              image={item.images.original.url}
                              title={item.title}
                            />
                          </Card>
                        ))
                      )}
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  wordNum: PropTypes.number.isRequired,
  gifNum: PropTypes.number.isRequired
};
export default connect(mapStateToProps)(withStyles(styles)(Home));
