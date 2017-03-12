import React, { PropTypes } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import '../styles/components/NewsItem.css'
import redditSelf from '../../public/images/reddit-self.png';
import redditDefault from '../../public/images/reddit-default.png';

const getThumbnail = (src) => {
  if (src === 'self') {
    return redditSelf
  } else if (src === 'default') {
    return redditDefault
  }
  return src
}

const getDate = (epoch) => (
  new Date(epoch * 1000).toString()
)

const NewsItem = (props) => (
  <Row className='news-item' >
    <Col xs={12} md={2}>
      <Image src={getThumbnail(props.thumbnail)} href={props.url} className='center-block' responsive />
    </Col>
    <Col xs={12} md={10}>
      <p className='title'><a href={props.url}>{props.title}</a></p>
      <p><span className='date'>{getDate(props.date)}</span>{' - '}<a className='discussion' href={'https://www.reddit.com' + props.discussion}>Discussion ({props.numComments})</a></p>
    </Col>
  </Row>
)

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  discussion: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  numComments: PropTypes.number.isRequired
}

export default NewsItem
