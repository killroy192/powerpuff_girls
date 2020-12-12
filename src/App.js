import { Provider } from 'react-redux';
import TestDiv from './testDiv';
import createStore from 'store';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <TestDiv />
    </Provider>
  );
}

export default App;
