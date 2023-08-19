import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import RestarauntCard from '../../Atoms/RestarauntCard'

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];


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


export default function RestarauntItems(props: IRestaraunts) {
  
  const {restarauntsData} = props
  
    console.log(restarauntsData)
  return (
    <TouchableOpacity activeOpacity={1}>
     {
        restarauntsData?.map((r, index) => {
    return <View key={index} style={styles.restarauntContainer}>

            <RestarauntCard  image={r?.scrollablePhotos?.src} info={r?.name} rating={r.rating} />
    </View>

        })
     } 
    </TouchableOpacity>
  )
}