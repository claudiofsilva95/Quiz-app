import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { RecordContext } from '../../contexts/RecordeContext';
import { useContext, useState } from "react";
import i18n from '../../contexts/locales/i18n';
import { ThemeContext } from "../../contexts/ThemeContext";

const PontosModal = ({ setEnable }) => {
    const { recorde, limparRecorde } = useContext(RecordContext);
    const { theme } = useContext(ThemeContext);

    const [mensagem, setMensagem] = useState('');

    const limpaRecorde = () => {
        limparRecorde();
        setMensagem(i18n.t('highScoreClearedSuccessfully'));
        setTimeout(() => {
            setMensagem('');
            setEnable();
        }, 1000);
    }

    return (
        <View style={[styles.modalLimparPontuacaoTela, theme && { backgroundColor: '#2222229c' }]}>
            <View style={[styles.limparPontuacaoView, theme]}>
                <View style={styles.recordeAtualView}>
                    <Text style={[styles.recordeAtualText, theme]}> {i18n.t('currentHighScore')} </Text>
                    <View style={[styles.recordeAtualNumeroView, theme && { backgroundColor: '#111' }]}>
                        <Text style={[styles.recordeAtualNumero, theme && { color: theme.color }]}> {recorde} </Text>
                    </View>
                </View>

                {mensagem ? (
                    <Text style={styles.mensagemSucesso}>{mensagem}</Text>
                ) : (
                    <>
                        <Text style={[styles.certezaText, theme]}> {i18n.t('areYouSureYouWantToResetYourHighScore')} </Text>

                        <View style={styles.botoesView}>
                            <TouchableOpacity
                                onPress={setEnable}
                                style={[styles.botaoCancelar, styles.botao, theme && { backgroundColor: '#420000' }]}
                            >
                                <Text style={[styles.botaoCancelarText, styles.botaoText, theme && { color: theme.color }]}>{i18n.t('cancel')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={limpaRecorde}
                                style={[styles.botaoLimpar, styles.botao, theme && { backgroundColor: '#054500' }]}
                            >
                                <Text style={[styles.botaoLimparText, styles.botaoText, theme && { color: theme.color }]}>{i18n.t('clear')}</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>
        </View>
    );
}

export default PontosModal;