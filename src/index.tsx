import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import News from './components/News';
import store from './store';
import './index.css';

const sections = [
  {
    div: 'science',
    subreddit: 'science'
  },
  {
    div: 'space',
    subreddit: 'space'
  },
  {
    div: 'environment',
    subreddit: 'environment'
  },
  {
    div: 'askscience',
    subreddit: 'askscience'
  },
  {
    div: 'earthphotography',
    subreddit: 'earthporn'
  },
  {
    div: 'humor',
    subreddit: 'funny'
  },
]

// ReactDOM.render(
//   <Provider store={store}>
//     <News subreddit={'cats'} />
//   </Provider>,
//   document.getElementById('science')
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <News subreddit={'dogs'} />
//   </Provider>,
//   document.getElementById('earthphotography')
// );

for (const i in sections) {
  ReactDOM.render(
    <Provider store={store}>
      <News subreddit={sections[i].subreddit} />
    </Provider>,
    document.getElementById(sections[i].div)
  );
}
