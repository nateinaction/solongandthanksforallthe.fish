import React from 'react';
import Youtube from 'react-youtube'
import {Row, Col, Image} from 'react-bootstrap';

import '../styles/components/Splash.css'
import dolphin from '../../public/dolphin.svg'

const videoOpts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1
        }
      }

const Splash = (props) => (
  <Row className='splash'>
    <Col xs={12} className='no-padding'>
      <Image src={dolphin} responsive />
    </Col>
    <Col xs={12} mdOffset={1} md={5}>
      {'The song was written by English composer '}
      <a href='http://www.jobytalbot.com/'>
        {'Joby Talbot'}
      </a>
      {', conductor '}
      <a href='http://www.fabermusicmedia.com/composers/austin-christopher'>
        {'Christopher Austin'}
      </a>
      {', and director '}
      <a href='http://garthjennings.com/'>
        {'Garth Jennings '}
      </a>
      {'and was performed by the '}
      <a href='http://www.tenebrae-choir.com/'>
        {'Tenebrae Choir'}
      </a>
        {'.'}
    </Col>
    <Col xs={12} md={5}>
      <Youtube
        videoId='N_dUmDBfp6k'
        opts={videoOpts} />
    </Col>
  </Row>
)

export default Splash
