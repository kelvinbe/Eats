import { View, Text, StyleSheet, Platform, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BrowseCard from "../components/Molecules/Browse/BrowseCard";
import BottomTabs from "../components/Organisms/BottomTabs";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Browse({navigation}) {
  const [FoodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(false)

  const options = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
    params: {
      "nutrition-type": "cooking",
      "category[0]": "generic-foods",
      "health[0]": "alcohol-free",
    },
    headers: {
      "X-RapidAPI-Key": "bcb659df96msh1d61b442ebc1883p1f566ejsn56992c7d7f79",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };

  const FetchFoodData = async () => {
    try {
        setLoading(true)
      const response = await axios.request(options);
      const food = response.data.hints;
      return food;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      const data = await FetchFoodData();
      setFoodData(data);
      setLoading(false)
    };
    fetchDataAndUpdateState();
  }, []);




  return (
    <View style={styles.homeContainer}>
        <View>
        <Text style={styles.headerStyling}>All Categories</Text>
        </View>
        {loading ? <ActivityIndicator size={'large'} color={'#FE4A3D'} />:
        <FlatList
            keyExtractor={item => item.food.foodId}
            numColumns={2}
            data={FoodData}
            renderItem={({item}) =>  <BrowseCard image={item.food.image}
            category={item.food.category}
            nutrients={item.food.nutrients}
            />}
        />}

    {loading ? null : <BottomTabs navigation={navigation} />}
    </View>
    );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
    backgroundColor: "#eee",
  },
  interiorContainer: {
    backgroundColor: "white",
    padding: 15,
  },
  headerStyling: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 10
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
