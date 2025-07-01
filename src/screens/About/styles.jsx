import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  aboutPage: {
    flex: 1,
    backgroundColor: '#18535f', // ou qualquer cor escura que você tenha definido
  },
  aboutContent: {
    padding: 20,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#ffffff', // texto branco
  },
  aboutSubtitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 10,
    color: '#ffffff', // texto branco
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    color: '#ffffff', // texto branco
  },
});
