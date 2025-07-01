import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#18535fc3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: '#1c4a53',
        width: '60%',
        height: 300,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        marginTop: '20',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonIdioma: {
        width: '70%',
        height: 40,
        marginBottom: 5,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#22222292',
    },
    buttonIdiomaText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ccc'
    },
    buttonOk: {
        marginTop: 'auto',
        marginBottom: 30,
        backgroundColor: '#ccc',
        width: 110,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOkText: {
        fontSize: 18,
        fontWeight: 'bold',
        // color: '#ccc'
    }
});

export { styles };