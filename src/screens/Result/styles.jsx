import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   questionPage: {
      flex: 1,
      backgroundColor: '#18535f',
      alignItems: 'center',
   },
   resultText: {
      fontSize: 24,
      color: '#4ea1a8',
      paddingTop: 50,
      fontWeight: 'bold'
   },
   totalTextContainer: {
      alignSelf: 'flex-start',
      marginLeft: 30,
      marginTop: 30
   },
   totalText: {
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: 15,
      fontSize: 20
   },
   totalTextAzul: {
      color: '#4ea1a8',
      fontWeight: 'bold',
      fontSize: 20
   },
   pontuacaoContainer: {
      backgroundColor: '#56a3b2',
      width: '80%',
      height: '350',
      borderRadius: 20,
      marginTop: 40,
      alignItems: 'center'
   },
   pontuacaoText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 30
   },
   newRecordeText: {
      color: '#56ff30',
      fontWeight: 'bold',
      marginTop: 30
   },
   pontuacaoNumero: {
      backgroundColor: '#80b474',
      color: '#fff',
      width: 200,
      height: 200,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 100,
      fontWeight: 'bold',
      marginTop: 10,
      borderRadius: 100,
   },
   buttonsContainer: {
      width: '80%',
      marginTop: 50,
   },
   button: {
      marginBottom: 40,
      width: '100%',
      height: 70,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center'
   },
   buttonTentarNovamente: {
      flexDirection: 'row',
      backgroundColor: '#80b474',
      borderWidth: 2,
      borderColor: '#0000006f'
   },
   buttonTentarNovamenteText: {
      color: '#fff',
      fontSize: 24,
      paddingLeft: 10,
      fontWeight: 'bold'
   },
   buttonHome: {
      backgroundColor: '#137282', // amarelo vibrante
      width: '100%',
      height: 70,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: '#0000006f'
   },
   buttonHomeText: {
      color: '#fff', // contraste com o fundo do botão
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: 10,
   }
});


export { styles };