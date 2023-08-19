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

  const [restaurantData, setRestaurantsData] = useState(localRestaurants)
  const [city, setCity] = useState('San Francisco')
  const [activeTab, setActiveTab] = useState('Delivery')
 
  const YELP_API =  'https://travel-advisor.p.rapidapi.com/hotels/list'

  const getRestaurantsFromYelp =async () => {
    const options = {
      method: 'GET',
      url: `https://yelp-business-api.p.rapidapi.com/search`,
      params: {
        query: 'restaurants',
        location: `${city}`,
        page: '1'
      },
      headers: {
        // 'X-RapidAPI-Key': 'ab9f5e48e7mshbbf7bfd0a50cd4bp143187jsn73e2ed3142b5',
        'X-RapidAPI-Host': 'yelp-business-api.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);

      if(activeTab === 'Delivery'){

        const filteredData = response.data.SearchResults.filter((data: any) => data.rating  < 4.8 )
        setRestaurantsData(filteredData)
      }else{
      setRestaurantsData(response.data?.SearchResults)
      }
    } catch (error) {
      console.error(error);
    }
    
  };
  useEffect(() => {
    getRestaurantsFromYelp()
  }, [city, activeTab])

  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.interiorContainer}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Categories />
      <RestarauntItems restarauntsData={restaurantData}  />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  )
}