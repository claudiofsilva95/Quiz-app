import { SafeAreaView, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import i18n from '../../contexts/locales/i18n';
import Header from '../../components/Header';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

const PrivacyPolicy = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <SafeAreaView style={[styles.privacyPage, theme]}>
            <Header titlePage={i18n.t('privacyTitle')}/>
            <ScrollView contentContainerStyle={styles.privacyContent}>                

                <Text style={styles.privacyDate}>
                    {i18n.t('privacyLastUpdated')}
                </Text>

                <Text style={styles.privacyText}>
                    {i18n.t('privacyIntro')}
                </Text>

                <Text style={styles.privacyBullet}>
                    • {i18n.t('privacyPoint1')}
                </Text>
                <Text style={styles.privacyBullet}>
                    • {i18n.t('privacyPoint2')}
                </Text>
                <Text style={styles.privacyBullet}>
                    • {i18n.t('privacyPoint3')}
                </Text>
                <Text style={styles.privacyBullet}>
                    • {i18n.t('privacyPoint4')}
                </Text>

                <Text style={styles.privacyText}>
                    {i18n.t('privacyFutureChanges')}
                </Text>

                <Text style={styles.privacyText}>
                    {i18n.t('privacyContact')}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PrivacyPolicy;
