import React from 'react';
import { SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import Config from '../../../config';

import CategoriesCard from '../../components/CategoriesCard';           
import styles from './Categories.style';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Categories = ({navigation}) => {

    const {data, loading, error} = useFetch(Config.CATEGORIES_API_URL);

    const handleCategorySelect = (strCategory) => {
        navigation.navigate('MealsPage', {strCategory});
    }

    const renderCategories = ({ item }) => <CategoriesCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />;

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />
    }

    return (
        <SafeAreaView style={styles.container} >
            <FlatList data={data.categories} renderItem={renderCategories} keyExtractor={(item) => item.idCategory} />
        </SafeAreaView>
    )
}

export default Categories;

