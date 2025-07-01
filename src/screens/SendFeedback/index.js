import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Linking, Alert } from 'react-native';
import { styles } from './styles';
import i18n from '../../contexts/locales/i18n';
import { ThemeContext } from '../../contexts/ThemeContext';
import { IdiomaContext } from '../../contexts/IdiomaContext';

const SendFeedback = () => {
    const { idioma } = useContext(IdiomaContext);
    const { theme } = useContext(ThemeContext);

    const handleSendFeedback = () => {
        const email = 'claudiofsilva@hotmail.com';
        const subject = encodeURIComponent(i18n.t('sendFeedbackEmailSubject', { defaultValue: 'Feedback do App de Quiz' }));
        const body = encodeURIComponent(i18n.t('sendFeedbackEmailBody', { defaultValue: 'Olá,\n\nGostaria de enviar o seguinte feedback:\n' }));

        const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

        Linking.canOpenURL(mailtoUrl)
            .then((supported) => {
                if (!supported) {
                    Alert.alert(i18n.t('sendFeedbackErrorTitle', { defaultValue: 'Erro' }), i18n.t('sendFeedbackErrorNoEmailApp'));
                } else {
                    return Linking.openURL(mailtoUrl);
                }
            })
            .catch(() => Alert.alert(i18n.t('sendFeedbackErrorTitle', { defaultValue: 'Erro' }), i18n.t('sendFeedbackErrorGeneric')));
    };

    return (
        <View style={[styles.container, theme]}>
            <Text style={[styles.title, theme]}>{i18n.t('sendFeedbackTitle')}</Text>
            <TouchableOpacity style={[styles.button, theme && { backgroundColor: '#000' }]} onPress={handleSendFeedback}>
                <Text style={[styles.buttonText, theme && { color: theme.color }]}>{i18n.t('sendFeedbackButton')}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SendFeedback;