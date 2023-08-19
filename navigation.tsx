import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import RestrauntDetails from './screens/RestrauntDetails';

export default function RootNavigation() {

    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    }
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>

            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='RestrauntDetails' component={RestrauntDetails} />
        </Stack.Navigator>

    </NavigationContainer>
  )
}