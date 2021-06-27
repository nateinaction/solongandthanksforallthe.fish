import { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';

import Article from './Article'
import fetchSubreddit from '../actions/fetchSubreddit'

class News extends Component {
  componentDidMount() {
    this.props.fetchSubreddit(this.props.subredditName)
  }

  render() {
    if (!this.props.subreddits[this.props.subredditName] || this.props.subreddits[this.props.subredditName].fetching) {
      return (
        <Col xs={12} className='loading p-0'>
          {'Loading...'}
        </Col>
      )
    }

    return (
      <Col xs={12} className='p-0'>
        {this.props.subreddits[this.props.subredditName].posts.map((post, index) => (
          <Article
            key={index}
            title={post.data.title}
            thumbnail={post.data.thumbnail}
            url={post.data.url}
            discussion={post.data.permalink}
            numComments={post.data.num_comments} />
        ))}
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
  subreddits: state.subreddits
})

const mapDispatchToProps = (dispatch) => ({
  fetchSubreddit: (subredditName) => dispatch(fetchSubreddit(subredditName))
})

const NewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(News)

export default NewsContainer;
