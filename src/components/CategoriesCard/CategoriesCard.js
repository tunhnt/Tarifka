import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TouchableWithoutFeedbackComponent } from 'react-native';
import styles from './CategoriesCard.style'

const CategoriesCard = ({category, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect} >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri: category.strCategoryThumb}}
                />
                <View style={styles.text_container} >
                    <Text style={styles.title} >{category.strCategory}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesCard;