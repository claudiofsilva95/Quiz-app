import { SafeAreaView, View, Text, ScrollView } from "react-native";
import { styles } from './styles';
import Header from '../../components/Header';
import i18n from '../../contexts/locales/i18n';
import { IdiomaContext } from '../../contexts/IdiomaContext';
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const About = () => {
    const { idioma } = useContext(IdiomaContext);
    const { theme } = useContext(ThemeContext);

    return (
        <SafeAreaView style={[styles.aboutPage, theme]}>
            <Header titlePage={i18n.t('aboutTheApp')} />
            <ScrollView contentContainerStyle={styles.aboutContent}>
                {/* <Text style={styles.aboutTitle}>Sobre o App</Text> */}

                <Text style={styles.aboutText}>{i18n.t('aboutIntro')} </Text>

                <Text style={styles.aboutSubtitle}>{i18n.t('aboutPrivacyTitle')}</Text>
                <Text style={styles.aboutText}>{i18n.t('aboutPrivacyText')}</Text>

                <Text style={styles.aboutSubtitle}>{i18n.t('aboutOfflineTitle')}</Text>
                <Text style={styles.aboutText}>{i18n.t('aboutOfflineText')}</Text>

                <Text style={styles.aboutSubtitle}>{i18n.t('aboutUpdatesTitle')}</Text>
                <Text style={styles.aboutText}>{i18n.t('aboutUpdatesText')} </Text>

                <Text style={[styles.aboutText, {fontWeight: 'bold', marginTop: 30}]}> {i18n.t('aboutFinal')} </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default About;
