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

const NewsItem = (props) => (
  <Row className='news-item'>
    <Col xs={12} md={2} className='p-0'>
      <a target='_blank' rel='noopener noreferrer' href={props.url}>
        <Image src={getThumbnail(props.thumbnail)} className='center-block' thumbnail width="100%" />
      </a>
    </Col>
    <Col xs={12} md={10}>
      <p className='title'><a target='_blank' rel='noopener noreferrer' href={props.url}>{props.title}</a></p>
      <p>
        <a className='discussion' target='_blank' rel='noopener noreferrer' href={'https://www.reddit.com' + props.discussion}>
          💬 Discuss ({props.numComments})
        </a>{' - '}
        <a className='share' onClick={() => navigator.share({ title: props.title, url: props.url })}>
          📤 Share
        </a>
      </p>
    </Col>
  </Row>
)

export default NewsItem
