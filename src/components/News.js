import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import './News.css';

import fetchSubreddit from '../actions/fetchSubreddit'
import NewsSection from './NewsSection'

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
      <Container className="news">
        {sections.map((section, index) => (
          <NewsSection
            key={index}
            title={section.title}
            subreddit={section.subreddit}
            subreddits={this.props.subreddits}
            fetchSubreddit={this.props.fetchSubreddit} />
        ))}
      </Container>
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
