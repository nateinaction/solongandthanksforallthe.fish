import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import '../styles/containers/News.css';

import fetchSubreddit from '../actions/fetchSubreddit'
import NewsSection from '../components/NewsSection'

const sections = [
  {
    title: 'Science',
    subreddit: 'science'
  },
  {
    title: 'Space',
    subreddit: 'space'
  },
  {
    title: 'Environment',
    subreddit: 'environment'
  },
  {
    title: 'Ask Science',
    subreddit: 'askscience'
  },
  {
    title: 'Photos of Earth',
    subreddit: 'earthporn'
  },
  {
    title: 'Humor',
    subreddit: 'funny'
  },
]

class News extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Grid className="news">
        {sections.map((section, index) => (
          <NewsSection
            key={index}
            title={section.title}
            subreddit={section.subreddit}
            subreddits={this.props.subreddits}
            fetchSubreddit={this.props.fetchSubreddit} />
        ))}
      </Grid>
    );
  }
}

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
