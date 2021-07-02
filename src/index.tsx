import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import News from './components/News';
import store from './store';

import {fetchArticles} from './store/newsReducer'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <News/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('content')
);

// Toggle theme dark mode
const toggleDarkMode = (forceEnable?: boolean) => {
  document.body.classList.toggle("dark-theme", forceEnable);
}

// On page load, set the theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toggleDarkMode(true);
} else {
  toggleDarkMode(false);
}

// On system change, update the theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (event.matches) {
    toggleDarkMode(true);
  } else {
    toggleDarkMode(false);
  }
})

// Fetch articles
Object.keys(store.getState()).map((sectionName: string) => {
  store.dispatch(fetchArticles(sectionName))
})
