import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#18535f',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        color: '#a1e5b0',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#a1e5b0',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
    },
    buttonText: {
        color: '#18535f',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export { styles };