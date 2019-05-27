import React, { Component } from 'react';
import '../styles/containers/Main.css';

import Header from '../components/Header'
import News from './News'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <News />
      </div>
    );
  }
}

export default Main;
