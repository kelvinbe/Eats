import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/Molecules/restrauntDetails/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/Molecules/restrauntDetails/MenuItems'
import ViewCartButton from '../components/Atoms/ViewCartButton'



const products = [
  {
    title: "Lasagna",
    description: "This is the description for Product 1.",
    price: 29.99,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Rice Chicken",
    description: "This is the description for Product 2.",
    price: 49.99,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Noodles",
    description: "This is the description for Product 3.",
    price: 19.99,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
  }, 
  {
      title: "Fried Pork",
      description: "This is the description for Product 3.",
      price: 29.99,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    }, 
    
  {
      title: "Mutton",
      description: "This is the description for Product 3.",
      price: 39.99,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    }, 
  {
      title: "Goat Meat",
      description: "This is the description for Product 3.",
      price: 49.99,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    }, 
  {
      title: "Vanilla Cake",
      description: "This is the description for Product 3.",
      price: 19.99,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
];



export default function RestrauntDetails({route, navigation}) {
  return (
    <View style={{flex: 1}}>
      <About route={route} />
      <Divider width={1.8} style={{marginVertical: 20}} />
      <MenuItems restaurantName={route.params.name} foods={products} />
      <ViewCartButton navigation={navigation} restaurantName={route.params.name} />
    </View>
)
}