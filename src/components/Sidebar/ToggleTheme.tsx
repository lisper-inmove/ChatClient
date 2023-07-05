import { createContext, useState, ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ThemeContext = createContext({ toggleTheme: () => {} });

const ToggleTheme = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      _setDarkMode();
    } else {
      _setLightMode();
    }
  };

  const _setDarkMode = () => {
    document.documentElement.style.setProperty('--appbar-bg-color', '#474747');
    document.documentElement.style.setProperty('--sidebar-bg-color', '#353535');
    document.documentElement.style.setProperty('--content-bg-color', '#555');
    document.documentElement.style.setProperty('--markdown-body-bg-color', '#666');
    document.documentElement.style.setProperty('--even-message-bg-color', '#333');
    document.documentElement.style.setProperty('--odd-message-bg-color', '#3f332a');
    document.documentElement.style.setProperty('--markdown-font-color', '#cecece');
    document.documentElement.style.setProperty('--textfield-bg-color', '#434343');
    document.documentElement.style.setProperty('--send-icon-bg-color', '#00b3ff');
  }

  const _setLightMode = () => {
    document.documentElement.style.setProperty('--appbar-bg-color', '#dadada');
    document.documentElement.style.setProperty('--sidebar-bg-color', '#dcdcdc');
    document.documentElement.style.setProperty('--content-bg-color', '#dfdfdf');
    document.documentElement.style.setProperty('--markdown-body-bg-color', '#c6c6c6');
    document.documentElement.style.setProperty('--even-message-bg-color', '#dfdfdf');
    document.documentElement.style.setProperty('--odd-message-bg-color', '#efdfdf');
    document.documentElement.style.setProperty('--markdown-font-color', '#000');
    document.documentElement.style.setProperty('--textfield-bg-color', '#aeaeae');
    document.documentElement.style.setProperty('--send-icon-bg-color', '#00b3ff');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ToggleTheme;
