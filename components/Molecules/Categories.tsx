import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CategoriesItems from '../Atoms/CategoriesItems'



const items = [
    {
      image: require("../../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../../assets/images/desserts.png"),
      text: "Desserts",
    },
  ];

  const styles = StyleSheet.create({
    categoriesContainer: {
        marginTop: 5,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingLeft: 20
    },
  });
  

export default function Categories() {

    return (

    <View style={styles.categoriesContainer}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
   {
    
   items.map((i) => {
    return <CategoriesItems image={i.image} text={i.text} key={i.text}/>
   }) 
}     
    </ScrollView>
    </View>
)}