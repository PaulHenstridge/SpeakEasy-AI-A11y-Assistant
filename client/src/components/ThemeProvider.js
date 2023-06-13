import React, { useState } from 'react';
import { ThemeContext, defaultTheme, highContrastTheme } from '../contexts/themeContext';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);

    const toggleTheme = () => {
        setTheme(theme === defaultTheme ? highContrastTheme : defaultTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={theme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;