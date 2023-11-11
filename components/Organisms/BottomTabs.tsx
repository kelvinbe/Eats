import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BottomTabsItems from '../Atoms/BottomTabsItems';


const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between'
    },
    interiorContainer: {

    }
  });
  

export default function BottomTabs({navigation}) {
  return (
    <View style={styles.tabsContainer}>
        <BottomTabsItems navigation={navigation} icon='home' name='Home'  />
        <BottomTabsItems navigation={navigation} icon='search' name='Browse' />
        <BottomTabsItems navigation={navigation} icon='shopping-bag' name='Grocery' />
        <BottomTabsItems navigation={navigation} icon='receipt' name='Orders' />
        <BottomTabsItems navigation={navigation} icon='user' name='Account' />
    </View>
  )
}