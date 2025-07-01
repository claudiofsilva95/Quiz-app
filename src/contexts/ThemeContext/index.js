import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState({});
    const [darkThemeIsEnabled, setDarkThemeIsEnabled] = useState(false);

    useEffect(() => {
        const loadTheme = async () => {
            const themeStorage = await AsyncStorage.getItem('@darkTheme');
            setDarkTheme(themeStorage !== null ? JSON.parse(themeStorage) : false);

            if (darkThemeIsEnabled) {
                setTheme({ color: '#b1b1b1', backgroundColor: '#222' });
            } else {
                setTheme(null);
            }
        }        
        loadTheme();

    }, [darkThemeIsEnabled]);

    const setDarkTheme = async (value) => {
        await AsyncStorage.setItem('@darkTheme', JSON.stringify(value));
        setDarkThemeIsEnabled(value);
    }
    return (
        <ThemeContext.Provider value={{ theme, setDarkTheme, darkThemeIsEnabled }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext };
export default ThemeProvider;