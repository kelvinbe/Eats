import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'



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

export default function SearchBar({setCity}) {
  return (
    <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
              placeholder='Search' 
              query={{key: 'AIzaSyBRViY_qUrGCeaIitgug7pTe8clfhQIt0Q'}} 
              onPress={(data, details = null) => {
                console.log(data.description)
                const city = data.description.split(',')[0]
                setCity(city)
              }}
              styles={{
                textInput: {
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    fontWeight: '700',
                    marginTop: 7
                },
                textInputContainer: {
                    backgroundColor: '#eee',
                    borderRadius: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10
                }
              }}  
              
              renderLeftButton={() => <View style={styles.leftButton}>
                <Ionicons name='location-sharp' size={24} />
              </View>}
              renderRightButton={() => <View style={styles.rightButton}>
                <AntDesign name='clockcircle' size={11} style={{marginRight: 6}}  />
                <Text>
                Search
              </Text>
              </View>
              } 
              />
    </View>
  )
}