import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        height: '100%',        
    },
    homeContainer: {
        flex: 3,
        alignItems: 'center',        
    },
    homeTitle: {
        alignItems: 'center'
    },
    homeText: {
        marginTop: 20,
        fontSize: 40,
        color: '#16a3d3',
        fontWeight: '900',
        textShadowColor: '#ffffffda',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
    },
    homeTextParagrafo: {
        color: '#16a3d3',
        fontSize: 20,
        fontWeight: '700',
        textShadowColor: '#ffffffda',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
    },

    buttonContainer: {
        marginTop: 60
    },

    recordView: {
        alignItems: 'center',
        marginBottom: 40
    },

    recordViewText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ccc'
    },
    button: {        
        marginBottom: 30,
        padding: 20,
        width: 300,
        height: 75,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    buttonText :{        
        fontSize: 20,        
    },
    buttonPlay: {
        backgroundColor: '#80b474',
        borderWidth: 2,
        borderColor: '#cccccc97'        
    },
    buttonAbout: {
        borderColor: '#cccccc97',
        borderWidth: 2
    },
    buttonPlayText: {
        color: '#ccc',
        fontWeight: 'bold'
    },
    buttonAboutText: {
        color: '#ccc',
        fontWeight: 'bold'
    }
    
});

export { styles };