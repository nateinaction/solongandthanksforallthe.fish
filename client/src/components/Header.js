import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';

import '../styles/components/Header.css'
import dolphin from '../../public/dolphin.svg'


const Header = (props) => (
  <Row className='header'>
    <Col xs={12} className='no-padding'>
      <Image src={dolphin} responsive />
    </Col>
  </Row>
)

export default Header
