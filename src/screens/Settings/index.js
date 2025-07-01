import { View, Text, SafeAreaView, TouchableOpacity, Switch, Modal } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { Feather, AntDesign, Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { useState, useContext } from "react";
import IdiomaModal from "../../components/IdiomaModal";
import { SoundContext } from '../../contexts/SoundContext';
import PontosModal from "../../components/PontosModal";
import i18n from '../../contexts/locales/i18n';
import { ThemeContext } from "../../contexts/ThemeContext";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {

    const navigation = useNavigation();

    const { toggleSoundEnable, soundIsEnable } = useContext(SoundContext);
    const { theme, setDarkTheme, darkThemeIsEnabled } = useContext(ThemeContext);

    const [themeIsEnable, setThemeIsEnable] = useState(darkThemeIsEnabled);
    const [notificIsEnable, setNotificIsEnable] = useState(true);
    const [soundSwitch, setSoundSwitch] = useState(soundIsEnable);
    const [modalIdiomaEnabled, setIdiomaModalEnabled] = useState(false);
    const [modalPontuacaoEnabled, setModalPontuacaoEnabled] = useState(false);

    const toggleThemeThemeSwitch = () => {
        setThemeIsEnable(!themeIsEnable);
        setDarkTheme(!themeIsEnable);
    }

    const toggleSoundThemeSwitch = () => {
        setSoundSwitch(!soundSwitch);
        toggleSoundEnable(!soundSwitch);
    }
    const toggleNotificThemeSwitch = () => setNotificIsEnable(previousState => !previousState);

    const darkColors = {
        backgroundColor: '#555',
        color: '#ccc'
    }

    return (
        <SafeAreaView style={[styles.pageConfig, theme]}>
            <Header titlePage={i18n.t('settings')} />
            <View style={styles.configContainer}>
                <View style={[styles.ViewItem, theme && darkColors]}>
                    <View style={styles.idiomaTextView}>
                        <View style={styles.siglaIdiomaView}>
                            <Text style={styles.siglaIdioma}>{i18n.t('languageCode')}</Text>
                        </View>
                        <Text style={[styles.idiomaText, theme && darkColors]}>{i18n.t('language')}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => setIdiomaModalEnabled(true)}
                        style={styles.idiomaButton}
                    >
                        <Text style={[styles.idiomaButtonText, theme && darkColors]}>{i18n.t('languageName')}</Text>
                        <Feather name="chevron-right" size={24} color={theme ? darkColors.color : '#222'} />
                    </TouchableOpacity>
                </View>

                <View style={[styles.ViewItem, theme && darkColors]}>
                    <View style={styles.temaTextView} >
                        <Ionicons style={styles.temaIcon} name="moon" size={30} color={theme ? darkColors.color : "#222"} />
                        <Text style={[styles.temaText, theme && darkColors]}>{i18n.t('theme')}</Text>
                    </View>

                    <View style={styles.temaButtonView}>
                        <Text style={[styles.temaButtonText, theme && darkColors]} >{themeIsEnable ? i18n.t('dark') : i18n.t('light')}</Text>
                        <TouchableOpacity>
                            <Switch
                                style={styles.switchButton}
                                trackColor={{ false: "#767577", true: "#222" }}
                                thumbColor={themeIsEnable ? "#fff" : "#f4f3f4"}
                                onValueChange={toggleThemeThemeSwitch}
                                value={themeIsEnable}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.ViewItem, theme && darkColors]}>
                    <View style={styles.temaTextView} >
                        <AntDesign style={styles.temaIcon} name="sound" size={30} color={theme ? darkColors.color : "#222"} />
                        <Text style={[styles.temaText, theme && darkColors]}>{i18n.t('sound')}</Text>
                    </View>

                    <View style={styles.temaButtonView}>
                        <Text style={[styles.temaButtonText, theme && darkColors]} >{soundSwitch ? i18n.t('on') : i18n.t('off')}</Text>
                        <TouchableOpacity>
                            <Switch
                                style={styles.switchButton}
                                trackColor={theme ? { false: "#767577", true: "#222" } : { false: "#767577", true: "#81b0ff" }}
                                thumbColor={darkThemeIsEnabled ? "#fff" : "#478aff"}
                                onValueChange={toggleSoundThemeSwitch}
                                value={soundSwitch}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.ViewItem, theme && darkColors]}>
                    <View style={styles.temaTextView} >
                        <Feather name="bell" size={30} color={theme ? darkColors.color : "#222"} />
                        <Text style={[styles.temaText, theme && darkColors]}>{i18n.t('notifications')}</Text>
                    </View>

                    <View style={styles.temaButtonView}>
                        <Text style={[styles.temaButtonText, theme && darkColors]} >{notificIsEnable ? i18n.t('on') : i18n.t('off')}</Text>
                        <TouchableOpacity>
                            <Switch
                                style={styles.switchButton}
                                trackColor={theme ? { false: "#767577", true: "#222" } : { false: "#767577", true: "#81b0ff" }}
                                thumbColor={darkThemeIsEnabled ? "#fff" : "#478aff"}
                                onValueChange={toggleNotificThemeSwitch}
                                value={notificIsEnable}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.outrosView, theme && darkColors]}>
                    <View style={styles.buttonOutrosView}>
                        <TouchableOpacity
                            onPress={() => setModalPontuacaoEnabled(true)}
                            style={styles.buttonOutros}
                        >
                            <MaterialCommunityIcons name="broom" size={30} color={theme ? darkColors.color : "#222"} />
                            <Text style={[styles.buttonOutrosText, theme && darkColors]}>{i18n.t('clearHighScore')}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonOutrosView}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SendFeedback')}
                            style={styles.buttonOutros}
                        >
                            <Fontisto name="email" size={30} color={theme ? darkColors.color : "#222"} />
                            <Text style={[styles.buttonOutrosText, theme && darkColors]}>{i18n.t('sendFeedback')}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonOutrosView}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('About')}
                            style={styles.buttonOutros}
                        >
                            <AntDesign name="exclamationcircleo" size={30} color={theme ? darkColors.color : "#222"} />
                            <Text style={[styles.buttonOutrosText, theme && darkColors]}>{i18n.t('aboutTheApp')}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonOutrosView}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('PrivacyPolicy')}
                            style={styles.buttonOutros}
                        >
                            <Fontisto name="locked" size={30} color={theme ? darkColors.color : "#222"} />
                            <Text style={[styles.buttonOutrosText, theme && darkColors]}>{i18n.t('privacyPolicy')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Modal visible={modalIdiomaEnabled} animationType="fade" transparent={true}>
                <IdiomaModal setEnable={() => setIdiomaModalEnabled(false)} />
            </Modal>
            <Modal visible={modalPontuacaoEnabled} animationType="fade" transparent={true}>
                <PontosModal setEnable={() => setModalPontuacaoEnabled(false)} />
            </Modal>
        </SafeAreaView>
    )
}

export default Settings;