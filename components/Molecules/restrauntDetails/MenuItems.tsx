import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

const products = [
    {
      title: "Product 1",
      description: "This is the description for Product 1.",
      price: 29.99,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Product 2",
      description: "This is the description for Product 2.",
      price: 49.99,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Product 3",
      description: "This is the description for Product 3.",
      price: 19.99,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    }, 
    {
        title: "Product 4",
        description: "This is the description for Product 3.",
        price: 19.99,
        image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
      }, 
      
    {
        title: "Product 5",
        description: "This is the description for Product 3.",
        price: 19.99,
        image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
      }, 
    {
        title: "Product 6",
        description: "This is the description for Product 3.",
        price: 19.99,
        image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
      }, 
    {
        title: "Product 7",
        description: "This is the description for Product 3.",
        price: 19.99,
        image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
  ];



export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
      {products.map((food, index) => (
        <View key={food.title}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation="horizontal" />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
      }}
    />
  </View>
);
