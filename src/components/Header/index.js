import { View, Text, TouchableOpacity }  from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Header = ( { titlePage } ) => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={styles.headerButton}
            >
                <Ionicons style={styles.buttonBackIcon} name="arrow-back" size={30} color="#000" />                
            </TouchableOpacity>
            <Text style={styles.headerText}>{ titlePage }</Text>
        </View>
    )
}


export default Header;