import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useContext } from 'react';
import i18n from '../../contexts/locales/i18n';
import { IdiomaContext } from '../../contexts/IdiomaContext';
import { ThemeContext } from '../../contexts/ThemeContext';


const IdiomaModal = ({ setEnable }) => {

    const idiomas = [
        {
            code: 'pt',
            label: 'Português',
        },
        {
            code: 'en',
            label: 'English',
        }
    ]

    const { idioma, trocarIdioma } = useContext(IdiomaContext);
    const { theme } = useContext(ThemeContext);

    const darkColors = {
        backgroundColor: '',
        color: ''
    }

    return (
        <View style={[styles.modalContainer, theme && { backgroundColor: '#222222cd' }]}>
            <View style={[styles.modalView, theme]}>
                <Text style={[styles.title, theme]}>{i18n.t('languageName')}</Text>
                {
                    idiomas.map((item) => {
                        return (
                            <TouchableOpacity
                                onPress={() => trocarIdioma(item.code)}
                                style={[styles.buttonIdioma, theme && { borderBottomColor: '#cccccc56' }]}
                                key={item.code}
                            >
                                <Text style={styles.buttonIdiomaText}>{item.label}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                <TouchableOpacity
                    style={[styles.buttonOk, theme && { backgroundColor: '#888'}]}
                    onPress={() => setEnable()}
                >
                    <Text style={styles.buttonOkText}> {i18n.t('confirm')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default IdiomaModal;