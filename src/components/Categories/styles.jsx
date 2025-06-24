import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: 100
    },
    categorie: {
        backgroundColor: '#ffffff8f',
        width: '48%',
        height: 160,
        marginBottom: 30,
        alignItems: 'center',
        borderRadius: 20
    },
    categorieImage: {
        width: 120,
        height: 120,
        marginTop: -20,
        marginRight: 30
    },
    categorieText: {
        marginTop: 20,
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold'
    }
});


export { styles };