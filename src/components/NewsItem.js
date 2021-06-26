import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import moment from 'moment'

import redditSelf from '../images/reddit-self.svg';
import redditDefault from '../images/reddit-default.svg';

const getThumbnail = (src) => {
  if (src === 'self' || src === '') {
    return redditSelf
  } else if (src === 'default') {
    return redditDefault
  }
  return src
}

const getDate = (epoch) => (
  moment.utc(epoch * 1000).fromNow()
)

const NewsItem = (props) => (
  <Row className='news-item' >
    <Col xs={12} md={2}>
      <a target='_blank' rel='noopener noreferrer' href={props.url}>
        <Image src={getThumbnail(props.thumbnail)} className='center-block' thumbnail />
      </a>
    </Col>
    <Col xs={12} md={10}>
      <p className='title'><a target='_blank' rel='noopener noreferrer' href={props.url}>{props.title}</a></p>
      <p>
        <span className='date'>{'Posted ' + getDate(props.date)}</span>{' - '}
        <a className='discussion' target='_blank' rel='noopener noreferrer' href={'https://www.reddit.com' + props.discussion}>
          Discussion ({props.numComments})
        </a>
      </p>
    </Col>
  </Row>
)

export default NewsItem
