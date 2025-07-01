import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
import { RecordContext } from '../../contexts/RecordeContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { IdiomaContext } from '../../contexts/IdiomaContext';
import i18n from '../../contexts/locales/i18n';

const Result = () => {
    const route = useRoute();
    const { pontos, categoria, tempo } = route.params;
    const navigation = useNavigation();
    const [pontuacao, setPontuacao] = useState(0);
    const [ novoRecordeText, setNovoRecordeText ] = useState('');

    const { recorde, novoRecorde } = useContext(RecordContext)
    const { theme } = useContext(ThemeContext);
    const { idioma } = useContext(IdiomaContext);

    const calculaTempo = (acertos, tempoTotal) => {
        if (tempoTotal <= 0) return 0;
        return Math.round((acertos * 20) / tempo);
    }

    const pontuacaoTempo = calculaTempo(pontos, tempo);

    useEffect(() => {
        const calculaPontuacao = () => {
            const novaPontuacao = (pontos * 10) + pontuacaoTempo;
            setPontuacao(Math.min(novaPontuacao, 999));
            if (novaPontuacao > recorde) {
                novoRecorde(novaPontuacao);
                setNovoRecordeText(i18n.t('newHighScore'));
            } else {
                setNovoRecordeText('')
            }
        }
        calculaPontuacao();
    }, []);

    return (
        <View style={[styles.questionPage, theme]}>
            <View>
                <Text style={[styles.resultText, theme&&{color: '#ddd'}]}> {i18n.t('result')} </Text>
            </View>

            <View style={styles.totalTextContainer}>
                <Text style={[styles.totalText, theme]}> {i18n.t('totalCorrectAnswers')} </Text>
                <Text style={[styles.totalTextAzul, theme&&{color: '#ddd'}]}> {pontos} {i18n.t('ofQuestionsIn')} {tempo} {i18n.t('seconds')} </Text>
            </View>

            <View style={[styles.pontuacaoContainer, theme && { backgroundColor: '#000' }]}>
                <Text style={[styles.pontuacaoText, theme && { color: theme.color }]}> {i18n.t('yourFinalScoreIs')}:</Text>
                <Text style={[styles.newRecordeText, theme && { color: theme.color }]}>{novoRecordeText}</Text>
                <Text style={[styles.pontuacaoNumero, theme]}>{pontuacao.toFixed(0)}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Question', { categoria: categoria })}
                    style={[styles.buttonTentarNovamente, styles.button, theme && { backgroundColor: '#000' }]}
                >
                    <MaterialIcons name="autorenew" size={30} color={theme ? theme.color : "#fff"} />
                    <Text style={[styles.buttonTentarNovamenteText, theme && { color: theme.color }]}>{i18n.t('tryAgain')}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.buttonHome, styles.button, theme && { backgroundColor: '#444' }]}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Ionicons name="home" size={24} color={theme ? "#ddd" : "#fff"} />
                    <Text style={[styles.buttonHomeText, theme && { color: "#ddd" }]}>{i18n.t('home')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result;