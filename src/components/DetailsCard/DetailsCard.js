import React from 'react'
import { View, Text, Image, Button, Linking } from 'react-native';
import styles from './DetailsCard.style'

const CategoriesCard = ({details}) => {
    return(
        
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri: details.strMealThumb}}
                />
                <Text style={styles.title} > {details.strMeal} </Text>
                <Text style={styles.desc} >{details.strInstructions}</Text>
                <Button color="#FF0000" title="Watch on Youtube" onPress={()=> Linking.openURL(details.strYoutube)}></Button>
            </View>
        
    )
}

export default CategoriesCard;