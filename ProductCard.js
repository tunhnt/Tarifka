import React from 'react';
import { View, Text, Image } from 'react-native';

const ProductCard = ({product}) => {
    return(
        <View>
            <Text>{product.title}</Text>
        </View>
    )
}