import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    questionPage: {
        flex: 1,
        backgroundColor: '#18535f',        
    },
    questoesTextView: {
        width: '100%',
        alignItems: 'center'
    },
    questoesText: {
        fontSize: 24,
        color: '#a1e5b0',
        paddingTop: 50,
        fontWeight: 'bold'
    },
    questionContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    questionConometro: {
        width: 120,
        height: 120,        
        backgroundColor: '#1d788b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60
    },
    questionConometroText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    questionText: {
        fontSize: 24,
        color: "#fff",
        marginTop: 30,
        width: '90%',
        height: 100
    },
    alternativeContainer: {
        marginTop: 50,
        width: '90%'
    },
    alternative: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 30,
        borderColor: '#fff'
    },
    alternativeText: {
        color: '#fff',
        fontSize: 20,
    },
    buttonProximaPerguntaAtivado: {
        backgroundColor: '#004804',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    buttonProximaPerguntaText: {
        color: '#fff',        
        fontSize: 18
    },
    buttonProximaPerguntaDesativado: {
        display: 'none'
    },
    perguntaNumeroContainer: {
        alignItems: 'center',
    },
    perguntaNumero: {
        fontSize: 24,
        color: "#fff"
    }
});

export { styles };