import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {GOOGLE_PLACES_API} from '@env'
import SearchableDropdown from 'react-native-searchable-dropdown';
import RNPickerSelect from 'react-native-picker-select';



const styles = StyleSheet.create({
    searchContainer: {
      marginTop: 15,
      flexDirection: 'row'
    },
    leftButton: {
        marginLeft: 10
    },
    rightButton: {
        flexDirection: 'row',
        marginRight: 8,
        backgroundColor: "white",
        padding: 9,
        borderRadius: 30,
        alignItems: 'center'
    }
  });

  const placeholder = {
    label: 'Select an item...',
    value: null,
    color: '#9EA0A4',
  };
  const items = [
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item2' },
    { label: 'Item 3', value: 'item3' },
  ];

export default function SearchBar({setCity}) {
  return (
    <View style={styles.searchContainer}>
    </View>
  )
}