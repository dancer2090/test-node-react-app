export const values = {
  xs: 0,
  sm: 550,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const bpTheme = {
  breakpoints: {
    up: (key) => `@media (min-width: ${values[key]}px)`,
    down: (key) => `@media (max-width: ${values[key]}px)`,
  },
};
