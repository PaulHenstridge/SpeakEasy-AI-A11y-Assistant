import React from 'react';

const defaultTheme = {
    textColor: '#10262f',
    backgroundColor: '#1e90ff',
    fontSize: {
        small: '12px',
        medium: '16px',
        large: '24px',
        extraLarge: '32px',
    }
}

const highContrastTheme = {
    textColor: '#1e90ff',
    backgroundColor: '#10262f',
    fontSize: {
        small: '14px',
        medium: '18px',
        large: '28px',
        extraLarge: '36px',
    }
}
const ThemeContext = React.createContext({
    theme: defaultTheme,
    toggleTheme: () => { },
});

export { ThemeContext, defaultTheme, highContrastTheme };