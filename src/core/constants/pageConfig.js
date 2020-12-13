export const SHOW = {
  path: '/',
  name: 'Main',
  disabled: false,
};

export const EPISODES = {
  path: '/episodes',
  name: 'Episodes',
  disabled: false,
};

export const CAST = {
  path: '/cast',
  name: 'Cast',
  disabled: true,
};

export const CREW = {
  path: '/crew',
  name: 'Crew',
  disabled: true,
};

// alias for index
export const INDEX = SHOW;

export const navPageConfig = [
  INDEX,
  EPISODES,
  CAST,
  CREW,
]