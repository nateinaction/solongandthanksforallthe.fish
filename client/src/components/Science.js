import React from 'react';
import {Row, Col} from 'react-bootstrap';

import '../styles/components/Science.css'

import NewsItem from './NewsItem'

const Science = (props) => (
  <Row className='science section'>
    <Col xs={12}>
      <h2 className='section-title'>Science</h2>
    </Col>
    <Col xs={12} className='news-roll'>
      <NewsItem />
    </Col>
  </Row>
)

export default Science
