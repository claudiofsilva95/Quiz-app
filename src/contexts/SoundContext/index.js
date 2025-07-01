import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SoundContext = createContext({});

const SoundProvider = ({ children }) => {
    const [soundIsEnable, setSoundIsEnable] = useState(true);

    useEffect(() => {
        const carregaAudio = async () => {
            const soundStorage = await AsyncStorage.getItem('@soundEnabled');            
            setSoundIsEnable(soundStorage !== null ? JSON.parse(soundStorage): true);
        }
        carregaAudio();
    }, [soundIsEnable]);



    const toggleSoundEnable = async (valor) => {        
        await AsyncStorage.setItem('@soundEnabled', JSON.stringify(valor));
        setSoundIsEnable(valor);        
    }


    return (
        <SoundContext.Provider value={{ soundIsEnable, toggleSoundEnable }}>
            {children}
        </SoundContext.Provider>
    )
}


export { SoundContext };

export default SoundProvider;