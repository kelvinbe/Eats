import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/Molecules/restrauntDetails/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/Molecules/restrauntDetails/MenuItems'



export default function RestrauntDetails() {
  return (
    <View style={{flex: 1}}>
      <About />
      <Divider width={1.8} style={{marginVertical: 20}} />
      <MenuItems />
    </View>
)
}