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
  

export default function BottomTabs() {
  return (
    <View style={styles.tabsContainer}>
        <BottomTabsItems icon='home' name='Home' />
        <BottomTabsItems icon='search' name='Browse' />
        <BottomTabsItems icon='shopping-bag' name='Grocery' />
        <BottomTabsItems icon='receipt' name='Orders' />
        <BottomTabsItems icon='user' name='Account' />
    </View>
  )
}