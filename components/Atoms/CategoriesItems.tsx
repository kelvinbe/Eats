import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'




interface ICategoryItems {
    image: string,
    text: string
}

const styles = StyleSheet.create({
    categoriesItemsContainer: {
        paddingLeft: 15,
        alignItems: 'center',
        alignSelf: 'center'
    },
    imageContainer: {
      width: 50,
      height: 40,
      resizeMode: 'contain',
      
    },
    text: {
        fontSize: 13,
        fontWeight: '900'
    }
  });

export default function CategoriesItems(props: ICategoryItems) {

    const {image, text} = props

    return (
    <View style={styles.categoriesItemsContainer}>

        <Image source={image} style={styles.imageContainer} />
        <Text style={styles.text}>{text}</Text>


    </View>
    )
}