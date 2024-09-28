import React, { useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';


const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
     }, []);
    
    useEffect(() => {
        localStorage.setItem('theme', theme);
     }, [theme]);

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}

export default ThemeProvider;
