import { createContext } from 'react';

export const themes = {
    noInfo: 'noInfo',
    sunny: 'sunny',
    cold: 'cold',
  };
  
  export const ThemeContext = createContext(
    themes.noInfo
  );