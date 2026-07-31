import { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState("dark");

    useEffect(() => {

        if (theme === "light") {
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
        }

    }, [theme]);

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }

    const providerValues = {
        theme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={providerValues}>
            <Outlet />
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeContextProvider };