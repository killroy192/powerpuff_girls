import Nav from './nav';

jest.mock('react-router-dom', () => ({
  NavLink: ({ children }) => <div>{children}</div>
}))

describe('Nav molecule', () => {
  const component = render(<Nav />);
  baseRenderCheck(component);
});