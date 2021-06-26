import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import News from './News';
import store from '../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><News /></Provider>, div);
});
