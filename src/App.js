import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import createStore from 'store';
import { INDEX } from 'core/constants/pageConfig'
import './main.scss';

const Show = lazy(() => import('pages/show'));

const Loading = () => <div>Loading...</div>;

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path={INDEX.path}>
              <Show />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
