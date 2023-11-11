import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import RestarauntCard from '../../Atoms/RestarauntCard'



export const localRestaurants = [
    {
      name: "Tasty Bites",
      image_url: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg",
      categories: ["Cafe", "Diner"],
      price: "$$",
      reviews: 984,
      rating: 4.6,
      city: "New York",
      activeTab: "Delivery"
    },
    {
      name: "Savory Spot",
      image_url: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      categories: ["Restaurant"],
      price: "$$$",
      reviews: 732,
      rating: 4.2,
      city: "Los Angeles",
      activeTab: "Pick Up"
    },
    {
      name: "Asian Fusion Delights",
      image_url: "https://images.pexels.com/photos/2290076/pexels-photo-2290076.jpeg",
      categories: ["Asian", "Fusion"],
      price: "$$$",
      reviews: 532,
      rating: 4.8,
      city: "San Francisco",
      activeTab: "Delivery"
    },
    {
      name: "Italian Eats",
      image_url: "https://images.pexels.com/photos/3065273/pexels-photo-3065273.jpeg",
      categories: ["Italian", "Pasta"],
      price: "$$",
      reviews: 217,
      rating: 4.1,
      city: "Rome",
      activeTab: "Pick Up"
    },
    {
      name: "Mediterranean Grill",
      image_url: "https://images.pexels.com/photos/6316/restaurant-italian-pizza-italian-restaurant.jpg",
      categories: ["Mediterranean", "Grill"],
      price: "$$",
      reviews: 143,
      rating: 4.5,
      city: "Barcelona",
      activeTab: "Delivery"
    },
    {
      name: "Sushi Oasis",
      image_url: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      categories: ["Sushi", "Japanese"],
      price: "$$$",
      reviews: 672,
      rating: 4.7,
      city: "Tokyo",
      activeTab: "Pick Up"
    },
    {
      name: "Urban Brunch",
      image_url: "https://images.pexels.com/photos/1893559/pexels-photo-1893559.jpeg",
      categories: ["Brunch", "Cafe"],
      price: "$$",
      reviews: 521,
      rating: 4.3,
      city: "Berlin",
      activeTab: "Delivery"
    },
    {
      name: "Seafood Harbor",
      image_url: "https://images.pexels.com/photos/1083701/pexels-photo-1083701.jpeg",
      categories: ["Seafood", "Restaurant"],
      price: "$$$",
      reviews: 305,
      rating: 4.0,
      city: "Sydney",
      activeTab: "Pick Up"
    },
    {
      name: "Mexican Fiesta",
      image_url: "https://images.pexels.com/photos/4511098/pexels-photo-4511098.jpeg",
      categories: ["Mexican", "Taco"],
      price: "$",
      reviews: 85,
      rating: 4.4,
      city: "Mexico City",
      activeTab: "Delivery"
    },
    {
      name: "Countryside BBQ",
      image_url: "https://images.pexels.com/photos/159888/barbecue-flame-grill-bbq-159888.jpeg",
      categories: ["BBQ", "Grill"],
      price: "$$",
      reviews: 179,
      rating: 4.9,
      city: "Austin",
      activeTab: "Pick Up"
    },
    // ... More restaurant objects (10 more)
    // Add 10 more restaurant objects here
    {
      name: "Cozy Corner Cafe",
      image_url: "https://images.pexels.com/photos/1579747/pexels-photo-1579747.jpeg",
      categories: ["Cafe", "Breakfast"],
      price: "$",
      reviews: 312,
      rating: 4.2,
      city: "Seattle",
      activeTab: "Delivery"
    },
    {
      name: "Vegan Vibes",
      image_url: "https://images.pexels.com/photos/2358054/pexels-photo-2358054.jpeg",
      categories: ["Vegan", "Healthy"],
      price: "$$",
      reviews: 422,
      rating: 4.7,
      city: "Portland",
      activeTab: "Pick Up"
    },
    {
      name: "Steakhouse Supreme",
      image_url: "https://images.pexels.com/photos/103685/pexels-photo-103685.jpeg",
      categories: ["Steakhouse", "Fine Dining"],
      price: "$$$",
      reviews: 152,
      rating: 4.5,
      city: "Chicago",
      activeTab: "Delivery"
    },
    {
      name: "Noodle Haven",
      image_url: "https://images.pexels.com/photos/68371/pexels-photo-68371.jpeg",
      categories: ["Asian", "Noodles"],
      price: "$",
      reviews: 88,
      rating: 4.0,
      city: "Bangkok",
      activeTab: "Pick Up"
    },
    {
      name: "Fisherman's Catch",
      image_url: "https://images.pexels.com/photos/6335/food-salmon-fish-seafood.jpg",
      categories: ["Seafood", "Fish"],
      price: "$$$",
      reviews: 240,
      rating: 4.3,
      city: "Copenhagen",
      activeTab: "Delivery"
    },
    {
      name: "Pizzeria Italia",
      image_url: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
      categories: ["Italian", "Pizza"],
      price: "$",
      reviews: 504,
      rating: 4.6,
      city: "Rome",
      activeTab: "Pick Up"
    },
    {
      name: "Sweet Treats Bakery",
      image_url: "https://images.pexels.com/photos/1319859/pexels-photo-1319859.jpeg",
      categories: ["Bakery", "Dessert"],
      price: "$",
      reviews: 325,
      rating: 4.8,
      city: "Paris",
      activeTab: "Delivery"
    },
    {
      name: "Burger Joint",
      image_url: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg",
      categories: ["Burgers", "Fast Food"],
      price: "$",
      reviews: 459,
      rating: 4.4,
      city: "New York",
      activeTab: "Pick Up"
    },
    {
      name: "Coastal Cuisine",
      image_url: "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg",
      categories: ["Seafood", "Beachfront"],
      price: "$$$",
      reviews: 187,
      rating: 4.9,
      city: "Miami",
      activeTab: "Delivery"
    },
    {
      name: "Traditional Teahouse",
      image_url: "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg",
      categories: ["Tea", "Cafe"],
      price: "$",
      reviews: 73,
      rating: 4.1,
      city: "Kyoto",
      activeTab: "Pick Up"
    },
  ];
  
  // console.log(localRestaurants);

  interface IRestaraunts {
    restarauntsData: {category: string, scrollablePhotos: string[] , foodId: string, image: string}[],
    setCity: () => void
  }



const styles = StyleSheet.create({
    restarauntContainer: {
        marginTop: 10,
        backgroundColor: 'white',
        padding: 15,
    },
  });

  // AIzaSyBRViY_qUrGCeaIitgug7pTe8clfhQIt0Q


export default function RestarauntItems({ navigation, ...props }) {

  const [arrayOfObjectsWithImages, setArrayOfObjectsWithImages] = useState([]);

  
  const {restarauntsData} = props


  
  return (
    <>
    {restarauntsData?.map((r, index) => {
      return  <TouchableOpacity key={index}  activeOpacity={1} onPress={() => navigation.navigate('RestrauntDetails', {
          image: r?.image_url,
          name: r?.name,
          rating: r?.rating,
          })}>
      <View style={styles.restarauntContainer}>

          <RestarauntCard  image={r?.image_url} info={r?.name} rating={r.rating} />
      </View>
      </TouchableOpacity>
    
        })
      } 
  </>)
}