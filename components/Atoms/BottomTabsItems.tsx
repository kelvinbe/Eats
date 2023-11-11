import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { ReactElement } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



interface ITabs {
    icon: string,
    name: string,
    onPress?: () => void,
    
}

const styles = StyleSheet.create({
    homeContainer: {

    },
    interiorContainer: {

    }
  });

  
  

export default function BottomTabsItems({icon, name, navigation}) {

  return (
    <TouchableOpacity onPress={() => navigation.navigate(name)}>
    <View>
    <FontAwesome5 color={'#FE4A3D'} name={icon} size={25} style={{marginBottom: 3, alignSelf: 'center'}}  />
      <Text>{name}</Text>
    </View>
    </TouchableOpacity>
  )
}