import Card from './card';

describe('Card molecule', () => {
  const component = render(<Card title="title" />);
  baseRenderCheck(component);
});