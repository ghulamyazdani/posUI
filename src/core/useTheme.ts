import { useTheme } from './PosUIProvier';
const useThemeHook = () => {
  const { theme, toggleTheme, isDarkMode, setDarkMode, setLightMode }: any =
    useTheme();

  return {
    theme,
    toggleTheme,
    isDarkMode,
    setDarkMode,
    setLightMode,
  };
};

export default useThemeHook;
