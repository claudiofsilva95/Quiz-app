import { useCallback, useContext } from 'react';
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
import { RecordContext } from '../../contexts/RecordeContext';
import i18n from '../../contexts/locales/i18n';
import { IdiomaContext } from '../../contexts/IdiomaContext';
import { ThemeContext } from '../../contexts/ThemeContext';

const Home = () => {
  const navigation = useNavigation();

  const { recorde } = useContext(RecordContext);
  const { idioma } = useContext(IdiomaContext);
  const { theme } = useContext(ThemeContext);

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

  const darkColors = {
    color: '#222'
  }

  return (
    <ImageBackground
      source={theme ? require('../../assets/images/background-dark.png') : require('../../assets/images/background.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <Logo />
      <View style={styles.homeContainer}>
        <View style={styles.homeTitle}>
          <Text style={[styles.homeText, theme && darkColors ]}>{i18n.t('letsGoPlay')}</Text>
          <Text style={[styles.homeTextParagrafo, theme && darkColors]}>{i18n.t('playNowAllCategories')}</Text>
        </View>
        <View style={styles.buttonContainer}>

          <View style={styles.recordView}>
            <Text style={[styles.recordViewText, theme && {color: '#ccc'}]}>{i18n.t('yourHighScoreIs')} {recorde} {i18n.t('points')}</Text>
          </View>
          <TouchableOpacity
            style={[styles.buttonPlay, styles.button, theme]}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text style={[styles.buttonPlayText, styles.buttonText]}>
              {i18n.t('play')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={[styles.buttonAbout, styles.button, theme && {backgroundColor: '#555'}]}
          >
            <Text style={[styles.buttonAboutText, styles.buttonText, theme && darkColors]}> {i18n.t('settings')} </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
