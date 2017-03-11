import React, { Component } from 'react';
import ReactGA from 'react-ga';
import '../styles/containers/Main.css';

import Header from '../components/Header'
import News from './News'

import trackingID from '../secrets/ga'
ReactGA.initialize(trackingID);

const logPageView = () => {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
}

class Main extends Component {
  componentDidMount() {
    logPageView()
  }

  render() {
    return (
      <div className="main">
        <Header />
        <News />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	firebase: state.firebase
})

const mapDispatchToProps = (dispatch) => ({

})

const MainContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(Main)

export default Main;
