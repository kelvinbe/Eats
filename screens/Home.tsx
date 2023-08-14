import React from 'react'
import HeaderTabs from '../components/Molecules/HeaderTabs'
import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native'
import SearchBar from '../components/Molecules/SearchBar';
import Categories from '../components/Molecules/Categories';



const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
    backgroundColor: '#eee'
  },
  interiorContainer: {
    backgroundColor: 'white',
    padding: 15
  }
});


export default function Home() {


  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.interiorContainer}>
      <HeaderTabs />
      <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  )
}