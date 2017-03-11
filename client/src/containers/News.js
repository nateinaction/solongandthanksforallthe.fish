import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import '../styles/containers/News.css';

import fetchSubreddit from '../actions/fetchSubreddit'
//import Science from '../components/Science'

const sections = [
  'science'
]

class News extends Component {
  componentDidMount() {
    sections.forEach((section) => {
      this.props.fetchSubreddit(section)
    })
  }

  render() {
    return (
      <Grid className="news">

      </Grid>
    );
  }
}

News.propTypes = {
  subreddits: PropTypes.object.isRequired,
  fetchSubreddit: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  subreddits: state.subreddits
})

const mapDispatchToProps = (dispatch) => ({
  fetchSubreddit: (subreddit) => dispatch(fetchSubreddit(subreddit))
})

const NewsContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(News)

export default NewsContainer;
