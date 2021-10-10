import React from 'react'
import {View, Text, TouchableWithoutFeedback, ImageBackground, Image } from 'react-native';
import styles from './MealsCard.style';

const MealsCard = ({ meals, onSelect }) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect} >
            <View style={styles.container}>
                <Image source={{ uri: meals.strMealThumb }} style={styles.image} />
                <Text style={styles.title} > {meals.strMeal} </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealsCard;