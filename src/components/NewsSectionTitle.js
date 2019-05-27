import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';

const NewsSectionTitle = (props) => (
  <Col xs={12}>
    <h2 className='section-title'>{props.title}</h2>
  </Col>
)

NewsSectionTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default NewsSectionTitle;
