import { View, Text, TouchableOpacity }  from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';


const Header = ( { titlePage } ) => {
    const navigation = useNavigation();
    const { theme } = useContext(ThemeContext);

    return (
        <View style={[styles.headerContainer, theme]}>
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={styles.headerButton}
            >
                <Ionicons style={styles.buttonBackIcon} name="arrow-back" size={30} color="#000" />                
            </TouchableOpacity>
            <Text style={[styles.headerText, theme]}>{ titlePage }</Text>
        </View>
    )
}


export default Header;