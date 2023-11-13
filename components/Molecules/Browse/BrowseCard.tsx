import { View, Text, StyleSheet,  } from 'react-native'
import React from 'react'
import { Card, Image } from '@rneui/themed';
import TouchableScale from 'react-native-touchable-scale';




interface IProps {
    category: string;
    image: string;
    nutrients: {ENERC_KCAL: number, PROCNT: number,FAT: number,CHOCDF: number, FIBTG: number}
    onPress: () => void;

}

export default function BrowseCard(props: IProps) {

    const {category, image, nutrients, onPress} = props


return (
    <TouchableScale onPress={onPress} activeScale={0.7}>
    <View style={styles.container}>
        <Card containerStyle={styles.card}>
            <View style={styles.user}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: image }}
                />
        <Card.Divider />
        <Card.Title>{category}</Card.Title>
            </View>
        </Card>
    </View>
    </TouchableScale>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    card: {
        width: 170,
        height: 200,
        borderRadius: 20
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'column',
        marginBottom: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
        // marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
    });
    