import ReactDOM from 'react-dom';
import Article from './Article';
import type { articleData } from '../store/newsReducer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const articleData: articleData = {
    title: 'test',
    url: 'test',
    thumbnail: 'test',
    permalink: 'test',
    num_comments: 0,
  }
  ReactDOM.render(<Article article={articleData} />, div);
});
