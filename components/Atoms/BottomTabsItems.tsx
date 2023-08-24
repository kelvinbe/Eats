import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { ReactElement } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



interface ITabs {
    icon: string,
    name: string
}

const styles = StyleSheet.create({
    homeContainer: {

    },
    interiorContainer: {

    }
  });
  

export default function BottomTabsItems(props: ITabs) {

        const {icon, name} = props
  return (
    <TouchableOpacity>
    <View>
    <FontAwesome5 name={icon} size={25} style={{marginBottom: 3, alignSelf: 'center'}}  />
      <Text>{name}</Text>
    </View>
    </TouchableOpacity>
  )
}