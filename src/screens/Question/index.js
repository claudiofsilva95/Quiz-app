import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import Header from '../../components/Header';
import { questions } from './questions';
import { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';


const Question = () => {
    const [perguntas, setPerguntas] = useState([]);
    const [numeroPergunta, setNumeroPergunta] = useState(0);
    const [buttonProximaPergunta, setButtonProximaPergunta] = useState(false);
    const [respostaSelecionada, setRespostaSelecionada] = useState(null);
    const [pontos, setPontos] = useState(0);
    const [ cronometro, setCronometro ] = useState(0);    

    const navigation = useNavigation();

    const normalize = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const route = useRoute();
    const { categoria } = route.params;

    useEffect(() => {

        const selecionaCategoria = () => {
            const categoriaSelecionada = normalize(categoria); // pode vir de props ou state

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

        return () => clearInterval(interval); // limpa o intervalo quando o componente desmontar
    }, []);
    
    
    const responsePergunta = (item) => {
        if (item === perguntas[numeroPergunta].answer) {
            setPontos(pontos + 1);
            // console.log(pontos);
        } else {
            // console.log(pontos);
        }
        setRespostaSelecionada(item);
        setButtonProximaPergunta(true);
    };

    const proximaPergunta = () => {
        const proximoIndice = numeroPergunta + 1;
        if (proximoIndice >= perguntas.length) {            
            navigation.navigate('Result', {pontos: pontos, categoria: categoria, tempo: cronometro});
            return;
        } else {
            setNumeroPergunta(proximoIndice);
            setRespostaSelecionada(null);
            setButtonProximaPergunta(false);
        }
    };

    return (
        <View style={styles.questionPage}>
            <View style={styles.questoesTextView}>
                <Text style={styles.questoesText}> Questões </Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.questionContainer}>
                    <View style={styles.questionConometro}>
                        <Text style={styles.questionConometroText}>
                            { cronometro }
                        </Text>
                    </View>

                    {perguntas.length > 0 && (
                        <>
                            <Text style={styles.questionText}>
                                {perguntas[numeroPergunta].question}
                            </Text>

                            <View style={styles.alternativeContainer}>
                                {perguntas[numeroPergunta].options.map((item, index) => {
                                    const letra = String.fromCharCode('a'.charCodeAt(0) + index);

                                    let backgroundColor = '#1d788b';
                                    if (buttonProximaPergunta) {
                                        if (item === perguntas[numeroPergunta].answer) {
                                            backgroundColor = '#4CAF50'; // verde
                                        } else if (item === respostaSelecionada) {
                                            backgroundColor = '#F44336'; // vermelho
                                        }
                                    }

                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            disabled={buttonProximaPergunta}
                                            onPress={() => responsePergunta(item)}
                                            style={[styles.alternative, { backgroundColor }]}
                                        >
                                            <Text style={styles.alternativeText}>
                                                {letra}) {item}
                                            </Text>
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
                        <Text style={styles.buttonProximaPerguntaText}>Próxima Pergunta</Text>
                    </TouchableOpacity>
                    <Text style={styles.perguntaNumero}>
                        Pergunta {numeroPergunta + 1} / {perguntas.length}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Question;
