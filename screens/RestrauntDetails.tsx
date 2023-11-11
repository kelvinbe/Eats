import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/Molecules/restrauntDetails/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/Molecules/restrauntDetails/MenuItems'
import ViewCartButton from '../components/Atoms/ViewCartButton'



const products = [
  {
    title: "Lasagna",
    description: "Sweet tasting beef lasagna",
    price: 29.99,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Rice Chicken",
    description: "Good Rice Chicken for you to enjoy",
    price: 49.99,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Noodles",
    description: "Indomie Noodles With Spicy Stew",
    price: 19.99,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
  }, 
  {
      title: "Fried Pork",
      description: "Juicy ribs for pork munchers",
      price: 29.99,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    }, 
    
  {
      title: "Mutton",
      description: "Tender Mutton for your pallet today",
      price: 39.99,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    }, 
  {
      title: "Goat Meat",
      description: "This is the rosated Goat meat for you",
      price: 49.99,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    }, 
  {
      title: "Vanilla Cake",
      description: "Nice Vanilla for your sweet tooth",
      price: 19.99,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
];



export default function RestrauntDetails({route, navigation}) {
  return (
    <View style={{flex: 1}}>
      <About route={route} />
      <Divider width={1.8} style={{marginVertical: 20}} />
      <MenuItems marginLeft={20} restaurantName={route.params.name} foods={products} />
      <ViewCartButton navigation={navigation} restaurantName={route.params.name} />
    </View>
)
}