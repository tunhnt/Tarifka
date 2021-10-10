import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';

import Config from '../../../config';
import MealsCard from '../../components/MealsCard';           
import styles from './Meals.style'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error';

const Meals = ({route, navigation}) => {
    const {strCategory} = route.params;

    const API_MEALS="https://www.themealdb.com/api/json/v1/1/filter.php?c="
    // env dosyası oluştururken bir hata yaptım sanırım çözemedim, burda const ile tanımlamak zorunda kaldım...
    
    const {data, loading, error } = useFetch(`${API_MEALS}${strCategory}`);

    const handleMealsSelect = (idMeal) => {
        navigation.navigate('DetailPage', {idMeal});    
    };

    const renderMeals = ({ item }) => <MealsCard meals={item} onSelect={() => handleMealsSelect(item.idMeal)} />;

    if (loading) {
        return <Loading />;
    }

    if (error) {
        console.log(error);
        return <Error />
    }

    return(
        <SafeAreaView style={styles.container} >
            <FlatList data={data.meals} renderItem={renderMeals} keyExtractor={(item) => item.idMeal} />
        </SafeAreaView>
    )
}

export default Meals;