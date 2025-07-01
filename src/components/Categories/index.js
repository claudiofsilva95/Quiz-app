import { Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { IdiomaContext } from '../../contexts/IdiomaContext';
import i18n from '../../contexts/locales/i18n';
import { useContext } from 'react';

const Categories = () => {

    const { idioma } = useContext(IdiomaContext);
    const navigation = useNavigation();

    const categories = [
    {
        id: 1,
        name: i18n.t('sports'),
        image: require('../../assets/images/esportes.png'),
        code: 'esportes'
    },
    {
        id: 2,
        name: i18n.t('science'),
        image: require('../../assets/images/ciencia.png'),
        code: 'ciencia'
    },
    {
        id: 3,
        name: i18n.t('countries'),
        image: require('../../assets/images/geografia.png'),
        code: 'paises'
    },
    {
        id: 4,
        name: i18n.t('football'),
        image: require('../../assets/images/futebol.png'),
        code: 'futebol'
    },
    {
        id: 5,
        name: i18n.t('cartoons'),
        image: require('../../assets/images/desenhos.png'),
        code: 'desenhos'
    },

];

    return (
        <ScrollView contentContainerStyle={styles.categoriesContainer}>
            {
                categories.map((item) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Question', {categoria: item.code})}
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