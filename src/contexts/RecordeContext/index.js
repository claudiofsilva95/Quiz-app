import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const RecordContext = createContext();

const RecordeProvider = ({ children }) => {
    const [recorde, setRecorde] = useState(0);

    useEffect(() => {
        const carregaRecorde = async () => {
            const recordeStorage = await AsyncStorage.getItem('@recorde');
            setRecorde(recordeStorage !== null ? JSON.parse(recordeStorage) : 0);
        }
        carregaRecorde();
    }, [recorde]);

    const novoRecorde = async (novoRecorde) => {
        await AsyncStorage.setItem('@recorde', JSON.stringify(novoRecorde))
        setRecorde(novoRecorde);
    }

    const limparRecorde = async () => {
        await AsyncStorage.removeItem('@recorde');
        setRecorde(0);
    }

    return (
        <RecordContext.Provider value={{ recorde, novoRecorde, limparRecorde }}>
            {children}
        </RecordContext.Provider>
    )
}


export { RecordContext };
export default RecordeProvider;