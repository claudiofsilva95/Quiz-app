import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { questions } from './questions';
import { useState, useEffect, useRef, useContext } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { SoundContext } from '../../contexts/SoundContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import i18n from '../../contexts/locales/i18n';

const Question = () => {
    const { soundIsEnable } = useContext(SoundContext);
    const { theme } = useContext(ThemeContext);

    const [perguntas, setPerguntas] = useState([]);
    const [numeroPergunta, setNumeroPergunta] = useState(0);
    const [buttonProximaPergunta, setButtonProximaPergunta] = useState(false);
    const [respostaSelecionada, setRespostaSelecionada] = useState(null);
    const [pontos, setPontos] = useState(0);
    const [cronometro, setCronometro] = useState(0);

    const acertoSoundRef = useRef(null);
    const erroSoundRef = useRef(null);

    const navigation = useNavigation();
    const route = useRoute();
    const { categoria } = route.params;

    const normalize = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    useEffect(() => {
        const selecionaCategoria = () => {
            const categoriaSelecionada = normalize(categoria);
            const filtradas = questions.filter(q => normalize(q.category) === categoriaSelecionada);
            const embaralhadas = [...new Set(filtradas)].sort(() => 0.5 - Math.random());
            const selecionadas = embaralhadas.slice(0, 10);
            setPerguntas(selecionadas);
        };
        selecionaCategoria();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCronometro(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const carregarSons = async () => {
            try {
                const acertoSound = new Audio.Sound();
                const erroSound = new Audio.Sound();
                await acertoSound.loadAsync(require('../../assets/sounds/acerto.mp3'));
                await erroSound.loadAsync(require('../../assets/sounds/erro.mp3'));
                acertoSoundRef.current = acertoSound;
                erroSoundRef.current = erroSound;
            } catch (error) {
                console.log('Erro ao carregar os sons:', error);
            }
        };

        carregarSons();

        return () => {
            acertoSoundRef.current?.unloadAsync();
            erroSoundRef.current?.unloadAsync();
        };
    }, []);

    const responsePergunta = (item) => {
        if (item === perguntas[numeroPergunta].answer || item === perguntas[numeroPergunta].answerEN) {
            setPontos(prev => prev + 1);
            tocarSom(true);
        } else {
            tocarSom(false);
        }
        setRespostaSelecionada(item);
        setButtonProximaPergunta(true);
    };

    const proximaPergunta = () => {
        const proximoIndice = numeroPergunta + 1;
        if (proximoIndice >= perguntas.length) {
            navigation.navigate('Result', {
                pontos,
                categoria,
                tempo: cronometro
            });
        } else {
            setNumeroPergunta(proximoIndice);
            setRespostaSelecionada(null);
            setButtonProximaPergunta(false);
        }
    };

    const tocarSom = async (acerto) => {
        if (!soundIsEnable) return;
        try {
            const sound = acerto ? acertoSoundRef.current : erroSoundRef.current;
            await sound?.replayAsync();
        } catch (error) {
            console.log('Erro ao tocar som:', error);
        }
    };

    // Helpers para idioma
    const perguntaAtual = perguntas[numeroPergunta];
    const lang = i18n.locale.toUpperCase();
    const perguntaTexto = perguntaAtual?.[`question${lang}`];
    const opcoes = perguntaAtual?.[`options${lang}`];

    return (
        <View style={[styles.questionPage, theme]}>
            <View style={styles.questoesTextView}>
                <Text style={[styles.questoesText, theme]}> {i18n.t('questions')} </Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.questionContainer}>
                    <View style={[styles.questionConometro, theme && { backgroundColor: '#000' }]}>
                        <Text style={[styles.questionConometroText, theme && { color: theme.color }]}>
                            {cronometro}
                        </Text>
                    </View>

                    {perguntaAtual && (
                        <>
                            <Text style={[styles.questionText, theme]}>{perguntaTexto}</Text>

                            <View style={styles.alternativeContainer}>
                                {opcoes.map((item, index) => {
                                    const letra = String.fromCharCode('a'.charCodeAt(0) + index);
                                    let backgroundColor = theme ? '#000' : '#1d788b';

                                    if (buttonProximaPergunta) {
                                        if (item === perguntaAtual.answer || item === perguntaAtual.answerEN) {
                                            backgroundColor = theme ? '#004702' : '#4CAF50'; // verde
                                        } else if (item === respostaSelecionada) {
                                            backgroundColor = theme ? '#4b0500' : '#F44336'; // vermelho
                                        }
                                    }

                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            disabled={buttonProximaPergunta}
                                            onPress={() => responsePergunta(item)}
                                            style={[styles.alternative, { backgroundColor }]}
                                        >
                                            <Text style={[styles.alternativeText, theme && { color: theme.color }]}> {letra}) {item} </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </>
                    )}
                </View>

                <View style={styles.perguntaNumeroContainer}>
                    <TouchableOpacity
                        onPress={proximaPergunta}
                        disabled={!buttonProximaPergunta}
                        style={
                            buttonProximaPergunta
                                ? styles.buttonProximaPerguntaAtivado
                                : styles.buttonProximaPerguntaDesativado
                        }
                    >
                        <Text style={[styles.buttonProximaPerguntaText, theme && { color: theme.color }]}> {i18n.t('nextQuestion')} </Text>
                    </TouchableOpacity>
                    <Text style={[styles.perguntaNumero, theme]}> {i18n.t('question')} {numeroPergunta + 1} / {perguntas.length} </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Question;
