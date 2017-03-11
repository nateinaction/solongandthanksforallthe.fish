import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import '../styles/containers/News.css';

import Science from '../components/Science'

class News extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Grid className="news">
       <Science />
      </Grid>
    );
  }
}

export default News;
