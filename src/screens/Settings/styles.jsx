import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    pageConfig: {
        flex: 1,
        backgroundColor: '#18535f',
    },
    configContainer: {
        alignItems: 'center',
        marginTop: 80,
    },
    ViewItem: {
        backgroundColor: '#1f6b7a',
        width: '90%',
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    idiomaTextView: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center'
    },
    siglaIdiomaView: {
        backgroundColor: '#cbcbcb',
        height: 30,
        width: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    siglaIdioma: {
        fontWeight: 'bold'
    },
    idiomaText: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 16,
        color: '#222'
    },
    idiomaButton: {
        flexDirection: 'row',
        marginRight: 20,
        alignItems: 'center',
    },
    idiomaButtonText: {
        fontSize: 16,
        color: '#222',
        marginRight: 10
    },
    temaTextView: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
    },
    temaIcon: {

    },
    temaText: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#222'
    },
    temaButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        // width: 140,
        justifyContent: 'space-between',
        
    },
    temaButtonText: {
        marginRight: 10,
        fontSize: 16,
        color: '#222'
    },
    switchButton: {
        transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
    },

    outrosView: {
        backgroundColor: '#1f6b7a',
        width: '90%',
        borderRadius: 10,
        paddingVertical: 10
    },
    buttonOutrosView: {        
        marginHorizontal: 20,        
        borderBottomWidth: 1,
        borderBottomColor: '#2222222a',
        marginBottom: 5
    },
    buttonOutros: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',        
        marginBottom: 15
    },
    buttonOutrosText:{ 
        fontSize: 16,        
        marginLeft: 10
    }
});

export { styles };