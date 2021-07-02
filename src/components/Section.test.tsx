import ReactDOM from 'react-dom';
import Section from './Section';
import type { section } from '../store/newsReducer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const section: section = {
    title: 'test',
    isFetching: false,
    articles: [],
  }
  ReactDOM.render(<Section section={section} />, div);
});
