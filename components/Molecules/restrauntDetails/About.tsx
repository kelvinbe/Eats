import { View, Text, Image } from 'react-native'
import React from 'react'
import RestarauntCard from '../../Atoms/RestarauntCard'





const image = 'https://images.pexels.com/photos/3483771/pexels-photo-3483771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const title = 'Farmhouse Kitchen Thai Cuisine'
const description = 'Thai . Comfort Food . $$ . HH . 4 star (2913+)'

export default function About(props) {



const {name, image, rating} = props.route.params

const Description = `Comfort Food . $$ . HH . ${rating} ${name}`



    return (
    <View>
     <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={Description} />
    </View>
    )
}


const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
  );
  
  const RestaurantName = (props) => (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.name}
    </Text>
  );
  
  const RestaurantDescription = (props) => (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}
    >
      {props.description}
    </Text>
  );