import App from './App';

describe('App component', () => {
  const component = render(<App />);
  baseRenderCheck(component);
});