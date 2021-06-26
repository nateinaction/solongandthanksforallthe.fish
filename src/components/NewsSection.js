import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import NewsRoll from './NewsRoll'

class NewsSection extends Component {
  componentDidMount() {
    this.props.fetchSubreddit(this.props.subreddit)
  }

  render() {
    return (
      <Row className={this.props.subreddit + ' section'}>
        <NewsRoll subreddit={this.props.subreddits[this.props.subreddit]} />
      </Row>
    );
  }
}

// NewsSection.propTypes = {
//   title: PropTypes.string.isRequired,
//   subreddit: PropTypes.string.isRequired,
//   subreddits: PropTypes.object.isRequired,
//   fetchSubreddit: PropTypes.func.isRequired
// }

export default NewsSection
