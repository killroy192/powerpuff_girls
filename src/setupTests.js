// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/react-hooks';
import { render } from '@testing-library/react';
import '@testing-library/user-event';

const baseRenderCheck = component => {
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
};

global.render = render;
global.baseRenderCheck = baseRenderCheck;