import React, { Component } from 'react';
import './Main.css';

import Header from './Header'
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
