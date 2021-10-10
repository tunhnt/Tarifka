import React from 'react';
import { FlatList } from 'react-native';
import Config from '../../../config';  
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error';
import DetailsCard from '../../components/DetailsCard'

const Detail = ({route}) => {

    const {idMeal} = route.params;

    const API_DETAIL="https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

    const {data, loading, error } = useFetch(`${API_DETAIL}${idMeal}`);
    
    const renderDetails = ({ item }) => <DetailsCard details={item} />;

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />
    }

    return(
        <FlatList
         data={data.meals} renderItem={renderDetails} keyExtractor={(item) => item.idMeal} 
        />
    )
}

export default Detail;