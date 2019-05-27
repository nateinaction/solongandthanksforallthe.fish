import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';

import NewsItem from './NewsItem'
import Message from './Message'

const Loading = () => (
  <Col xs={12} className='loading'>
    {'Loading...'}
  </Col>
)

const Warning = () => (
  <Col xs={12} className='warning'>
    <Message
      message={this.props.subreddit.message} />
  </Col>
)

const filterPosts = (posts) => (
  posts.filter((post) => (
    (!post.data.stickied)
  )).slice(0,5)
)

class NewsRoll extends Component {
  render() {
    if (!this.props.subreddit || this.props.subreddit.fetching) {
      return Loading()
    } else if (this.props.subreddit.message) {
      return Warning()
    }
    const posts = filterPosts(this.props.subreddit.posts)
    return (
      <Col xs={12} className='news-roll'>
        {posts.map((post, index) => (
            <NewsItem
              key={index}
              title={post.data.title}
              thumbnail={post.data.thumbnail}
              url={post.data.url}
              discussion={post.data.permalink}
              date={post.data.created_utc}
              numComments={post.data.num_comments} />
        ))}
      </Col>
    );
  }
}

// NewsRoll.propTypes = {
//   subreddit: PropTypes.object
// }

export default NewsRoll
