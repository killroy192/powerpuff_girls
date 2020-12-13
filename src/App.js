import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import createStore from 'store';
import { INDEX, EPISODES } from 'core/constants/pageConfig'
import Skeleton from 'react-loading-skeleton';
import './main.scss';

const ShowPage = lazy(() => import('pages/show'));
const Episodes = lazy(() => import('pages/episodes'));

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Skeleton />}>
          <Switch>
            <Route path={EPISODES.path}>
              <Episodes />
            </Route>
            <Route path={INDEX.path}>
              <ShowPage />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
