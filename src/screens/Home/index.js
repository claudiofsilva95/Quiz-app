import React, { useCallback } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';
import Logo from '../../components/Logo';

const Home = () => {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Sair do app', 'Você deseja sair?', [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Sair', onPress: () => BackHandler.exitApp() },
        ]);
        return true; // impede comportamento padrão
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => backHandler.remove(); // ✅ forma moderna e correta
    }, [])
  );

  return (
    <ImageBackground
      source={require('../../assets/images/background1.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <Logo />
      <View style={styles.homeContainer}>
        <View style={styles.homeTitle}>
          <Text style={styles.homeText}>Vamos Jogar!</Text>
          <Text style={styles.homeTextParagrafo}>Jogue agora todas as Categorias</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttonPlay, styles.button]}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text style={[styles.buttonPlayText, styles.buttonText]}>
              Jogar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonAbout, styles.button]}>
            <Text style={[styles.buttonAboutText, styles.buttonText]}>
              Sobre
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
