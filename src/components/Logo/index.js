import { View, Image } from "react-native";
import { styles } from './styles'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Logo = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={styles.logoContainer}>
            <Image
                style={styles.logoImage}
                source={theme ? require('../../assets/images/logo-dark.png'): require('../../assets/images/logo.png') }
            />
        </View>
    )
}

export default Logo;