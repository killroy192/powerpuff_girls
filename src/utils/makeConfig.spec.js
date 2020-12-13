import { makeConfig } from './makeConfig';

describe('makeConfig', () => {
  const config = makeConfig({
    special: 'special prop',
    default: 'default',
  });

  it.each([
    [
      'special',
      'special prop',
    ],
    [
      'something-else',
      'default',
    ],
  ])(
    'should return value from property or from default property',
    (v, expected) => expect(config(v)).toBe(expected)
  );
});

