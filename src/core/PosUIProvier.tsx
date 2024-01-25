// ThemeContext.js

import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from '../themes/theme';

const ThemeContext = createContext();

export const PosUIThemeProvider = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const setDarkMode = () => {
    setIsDarkMode(true);
  };

  const setLightMode = () => {
    setIsDarkMode(false);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isDarkMode, setDarkMode, setLightMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
