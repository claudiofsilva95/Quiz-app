import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalLimparPontuacaoTela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0e3e469c'
    },
    limparPontuacaoView: {
        backgroundColor: '#18535f',
        width: '80%',
        height: 300,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center'
    },
    recordeAtualView: {
        alignItems: 'center',
        marginTop: 30
    },
    recordeAtualText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ccc'
    },
    recordeAtualNumeroView: {
        marginTop: 10,
        backgroundColor: '#076b00',
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35
    },
    recordeAtualNumero: {
        color: '#ccc',
        fontSize: 24,
        fontWeight: 'bold',
    },
    certezaText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ccc'
    },
    botoesView: {
        marginTop: 'auto',
        marginBottom: 40,
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-around'
    },
    botao: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    botaoText: {
        color: '#ccc',
        fontSize: 18,
        fontWeight: 'bold'
    },
    botaoCancelar: {
        backgroundColor: '#890505',
    },
    botaoCancelarText: {        
    },
    botaoLimpar: {
        backgroundColor: '#008a20',
    },
    mensagemSucesso: {
        color: '#4CAF50',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
});


export { styles };