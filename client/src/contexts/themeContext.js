import React from 'react';

const defaultTheme = {
    textColor: '#10262f',
    backgroundColor: '#1e90ff',

    fontSize: '16px',
}

const highContrastTheme = {
    textColor: '#1e90ff',
    backgroundColor: '#10262f',
    fontSize: '24px',
}

const ThemeContext = React.createContext({
    theme: defaultTheme,
    toggleTheme: () => { },
});

export { ThemeContext, defaultTheme, highContrastTheme };