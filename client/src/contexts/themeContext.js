import React from 'react';
//
const defaultTheme = {
    name: 'default',
    colors: {
        bg: '#1e90ff',
        fg: '#2f0949',
        ac: '#FFD700'
    },
    fontSize: {
        small: '12px',
        medium: '24px',
        large: '30px',
        extraLarge: '38px',
    },
    letterSpacing: {
        medium: '2px'
    },

}

const highContrastTheme = {
    name: 'highContrast',
    colors: {
        bg: '#000000',
        fg: '#b1e5ed',
        ac: '#7d1603'
    },
    fontSize: {
        small: '18px',
        medium: '36px',
        large: '40px',
        extraLarge: '46px',
    },
    letterSpacing: {
        medium: '3px'
    }
}
const ThemeContext = React.createContext({
    theme: defaultTheme,
    toggleTheme: () => { },
});

export { ThemeContext, defaultTheme, highContrastTheme };