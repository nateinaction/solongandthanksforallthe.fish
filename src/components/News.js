import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';

import fetchSubreddit from '../actions/fetchSubreddit'
import NewsSection from './NewsSection'


const News = (props) => (
  <Container className="news">
    <NewsSection
      subreddit={props.subreddit}
      subreddits={props.subreddits}
      fetchSubreddit={props.fetchSubreddit} />
  </Container>
)

// News.propTypes = {
//   subreddits: PropTypes.object.isRequired,
//   fetchSubreddit: PropTypes.func.isRequired
// }

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
