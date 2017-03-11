import React from 'react';
import {Col, Image} from 'react-bootstrap';

import '../styles/components/NewsItem.css'

const NewsItem = (props) => (
  <a className='news-item' href=''>
    <Col xs={4}>
      <Image src='' responsive />
    </Col>
    <Col xs={8}>
      <h3>This is a title</h3>
    </Col>
  </a>
)

export default NewsItem
