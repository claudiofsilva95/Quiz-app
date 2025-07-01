import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#18535f',
        flexDirection: 'row',        
        alignItems: 'center',
        paddingTop: 10
    },
    headerButton: {                        
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: '#ffffff30',
        marginLeft: 20,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    buttonBackIcon: {
        
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 30,
        marginTop: 30,
        color: '#a1e5b0',
        fontWeight: 'bold'        
    },
});


export { styles };