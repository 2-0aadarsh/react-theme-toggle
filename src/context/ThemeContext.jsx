/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {

    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("currentTheme") || "light");

    useEffect(() => {
      document.documentElement.setAttribute("data-theme", currentTheme);
      localStorage.setItem("currentTheme", currentTheme);
    }, [currentTheme]);

    const toggleTheme = (theme) => {
        setCurrentTheme(theme);
    }

    const theme = currentTheme;

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}