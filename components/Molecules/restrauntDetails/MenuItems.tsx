import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { Dimensions } from 'react-native';


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


export default function MenuItems({restaurantName, foods, hideCheckbox, marginLeft}) {





  const dispatch = useDispatch()
  const selectItem = (item, checkboxValue) => dispatch({
    type: 'ADD_TO_CART',
    payload: {...item, restrauntName: restaurantName,  checkboxValue: checkboxValue}
  })

  const cartItems = useSelector(state => state?.cartReducer?.selectedItems?.items)

  const isFoodInCart = (food, cartItems) => {
   return Boolean(cartItems?.find((item) => item.title === food.title))
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
      {foods.map((food, index) => (
        <View key={food.title}>
          <View style={styles.menuItemStyle}>
          {hideCheckbox ? <></> : <BouncyCheckbox   fillColor="green" onPress={(checkboxValue: boolean) => selectItem(food, checkboxValue)}   isChecked={isFoodInCart(food, cartItems)}/>}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft} />
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

const FoodImage = ({marginLeft, ...props}) => {
  

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


 return  <View>
  <Image
    source={{ uri: props.food.image }}
    style={{
      width: windowWidth > 360 ? 100 : 50,
      height: windowHeight > 712 ? 100 : 60,
      borderRadius: 8,
      marginRight: 10
    }}
  />
</View>



}


