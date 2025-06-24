import { View, Text } from "react-native";
import { styles } from './styles';
import Header from '../../components/Header';
import Categories from "../../components/Categories";

const Dashboard = () => {
    return (
        <View style={styles.dashboardContainer}>
            <Header titlePage='CATEGORIAS'/>
            <Categories />
        </View>
    )
}

export default Dashboard;