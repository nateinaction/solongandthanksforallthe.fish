import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import News from './components/News';
import store from './store';
import './index.css';

const sections = document.getElementsByClassName('section-body');
for (let i = 0; i < sections.length; i++) {
  ReactDOM.render(
    <Provider store={store}>
      <News subredditName={sections[i].id} />
    </Provider>,
    sections[i]
  );
}
