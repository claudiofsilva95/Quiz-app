import { Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { categories } from './categories';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {

    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.categoriesContainer}>
            {
                categories.map((item) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Question', {categoria: item.name})}
                            style={styles.categorie} key={item.id}
                        >
                            <Image
                                style={styles.categorieImage}                                                                
                                source={item.image ? item.image: require('../../assets/images/comida.png')}
                            />
                            <Text style={styles.categorieText}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }

        </ScrollView>
    )
}

export default Categories;