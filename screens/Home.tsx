import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/Molecules/home/HeaderTabs'
import { View, Text, SafeAreaView, StyleSheet, Platform, ScrollView } from 'react-native'
import SearchBar from '../components/Molecules/home/SearchBar';
import Categories from '../components/Molecules/home/Categories';
import RestarauntItems from '../components/Molecules/home/RestarauntItems';
import { localRestaurants } from '../components/Molecules/home/RestarauntItems';
import axios from 'axios'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/Organisms/BottomTabs';
import { RAPID_API_KEY } from "@env";


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


export default function Home({navigation}) {

  const [restaurantData, setRestaurantsData] = useState(localRestaurants)
  const [city, setCity] = useState('San Fransisco')
  const [activeTab, setActiveTab] = useState('Delivery')
  const [filteredData, setFilteredData] = useState([]);

  


  // Function to filter restaurants based on activeTab
  const filterRestaurants = () => {
    const filtered = restaurantData.filter(restaurant => restaurant.activeTab === activeTab);
    setFilteredData(filtered);
  };

  // Call filterRestaurants when activeTab changes
  React.useEffect(() => {
    filterRestaurants();
  }, [activeTab]);

  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.interiorContainer}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Categories />
      <RestarauntItems restarauntsData={filteredData} navigation={navigation}  />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  )
}