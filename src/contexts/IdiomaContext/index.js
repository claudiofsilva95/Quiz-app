import { createContext, useState, useEffect } from "react";
import { getLocales } from "expo-localization";
import i18n from "../locales/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";

const IdiomaContext = createContext();

const IdiomaProvider = ({ children }) => {

    const locales = getLocales();
    const deviceLanguage = locales[0].languageCode;
    const [idioma, setIdioma] = useState(deviceLanguage);

    useEffect(() => {
        const loadIdioma = async () => {
            const idiomaStorage = await AsyncStorage.getItem('@idioma');
            if (idiomaStorage !== null) {
                i18n.locale = idiomaStorage;
                setIdioma(idiomaStorage)
            }

        }
        loadIdioma();

    }, []);

    const trocarIdioma = async (idioma) => {
        await AsyncStorage.setItem('@idioma', idioma);
        i18n.locale = idioma;
        setIdioma(idioma);
    }

    return (
        <IdiomaContext.Provider value={{ idioma, trocarIdioma }}>
            {children}
        </IdiomaContext.Provider>
    )
}


export { IdiomaContext };
export default IdiomaProvider;