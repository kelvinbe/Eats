import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface IRestarauntCard {
    image: string;
    info: string;
    time?: string;
    rating: number
}


const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 20
    },
    imageContainer: {
        width: "100%",
        height: 180
    },
    heartIcon: {
        position: 'absolute',
        right: 20,
        top: 20
    },
    infoSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    infoText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    timeText: {
        fontSize: 13,
        color: 'grey'
    },
    ratingText: {
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center'
    }
  });

export default function RestarauntCard(props: IRestarauntCard) {

    const {image, info, time, rating} = props


    return (
    <View style={styles.mainContainer}>
    <Image source={{uri: image}} alt='Restaurant image loading' style={styles.imageContainer} />
    <TouchableOpacity style={styles.heartIcon}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
    </TouchableOpacity>
    <View style={styles.infoSection}>
        <View>
        <Text style={styles.infoText}>{info}</Text>
        <Text style={styles.timeText}>30-45 . min</Text>
        </View>
        <View style={styles.ratingText}>
        <Text>{rating}</Text>
        </View>
        
    </View>
    </View>
    )
}