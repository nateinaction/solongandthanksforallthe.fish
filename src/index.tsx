import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import News from './components/News';
import store from './store';

const sections = document.getElementsByClassName('section-body');
for (let i = 0; i < sections.length; i++) {
  ReactDOM.render(
    <Provider store={store}>
      <News subredditName={sections[i].id} />
    </Provider>,
    sections[i]
  );
}

// Toggle theme dark mode
function enableDarkMode(enable: boolean) {
  document.body.classList.toggle("dark-theme", enable);
}

// On page load, set the theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  enableDarkMode(true);
} else {
  enableDarkMode(false);
}

// On system change, update the theme
window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
  if (event.matches) {
    enableDarkMode(true);
  } else {
    enableDarkMode(false);
  }
})
