import ReactDOM from 'react-dom';
import NewsItem from './NewsItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsItem />, div);
});