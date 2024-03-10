import { useTheme } from './PosUIProvier';
const useThemeHook = () => {
  const {
    theme,
    colors,
    toggleTheme,
    isDarkMode,
    setDarkMode,
    setLightMode,
  }: any = useTheme();

  return {
    theme,
    colors,
    toggleTheme,
    isDarkMode,
    setDarkMode,
    setLightMode,
  };
};

export default useThemeHook;
