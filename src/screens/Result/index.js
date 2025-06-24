import { View, Text, TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

const Result = () => {
    
    const route = useRoute();
    const { pontos, categoria, tempo } = route.params;
    const navigation = useNavigation();
    const [ pontuacao, setPontuacao ] = useState(0);


    const calculaTempo = (acertos, tempoTotal) => {
        if (tempoTotal <= 0) return 0;        
        return Math.round((acertos * 100) / tempo);
    }

    const pontuacaoTempo = calculaTempo(pontos, tempo);

    useEffect(() => {
        const calculaPontuacao = () => {
            const novaPontuacao = (pontos * 10) + pontuacaoTempo;
            setPontuacao(Math.min(novaPontuacao, 999));
        }
        calculaPontuacao();
    }, []);

    return (
        <View style={styles.questionPage }>
            <View>
                <Text style={styles.resultText}> Resultado </Text>
            </View>

            <View style={styles.totalTextContainer}>
                <Text style={styles.totalText}> Total de respostas corretas </Text>
                <Text style={styles.totalTextAzul}> {pontos} de 10 Questões em {tempo} segundos</Text>
            </View>

            <View style={styles.pontuacaoContainer}>
                <Text style={styles.pontuacaoText}> Sua pontuação final é:</Text>
                <Text style={styles.pontuacaoNumero}>{ pontuacao.toFixed(0) }</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Question', {categoria: categoria})}
                    style={[styles.buttonTentarNovamente, styles.button]}
                >
                    <MaterialIcons name="autorenew" size={30} color="#fff" />
                    <Text style={styles.buttonTentarNovamenteText}>Tentar Novamente</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.buttonHome, styles.button]}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Ionicons name="home" size={24} color="#fff" />
                    <Text style={styles.buttonHomeText}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result;