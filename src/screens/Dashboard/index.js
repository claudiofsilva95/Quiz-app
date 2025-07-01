import { View, Text } from "react-native";
import { styles } from './styles';
import Header from '../../components/Header';
import Categories from "../../components/Categories";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import i18n from '../../contexts/locales/i18n';
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Dashboard = () => {
    const { idioma } = useContext(IdiomaContext);
    const { theme } = useContext(ThemeContext);

    return (
        <View style={[styles.dashboardContainer, theme]}>
            <Header titlePage={i18n.t('categories').toUpperCase()}/>
            <Categories />
        </View>
    )
}

export default Dashboard;