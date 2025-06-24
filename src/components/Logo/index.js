import { Text, View, Image } from "react-native";
import { styles } from './styles'

const Logo = () => {
    return (
        <View style={styles.logoContainer}>
            <Image
                style={styles.logoImage}
                source={require('../../assets/images/logo.png')}
            />
        </View>
    )
}

export default Logo;