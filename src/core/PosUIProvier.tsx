// ThemeContext.js

import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from '../themes/theme';
import { colorsLight, colorsDark } from '../themes/config';

const ThemeContext = createContext({});

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
  const colors = isDarkMode ? colorsDark : colorsLight;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors,
        toggleTheme,
        isDarkMode,
        setDarkMode,
        setLightMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
