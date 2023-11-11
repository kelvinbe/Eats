import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import RestrauntDetails from './screens/RestrauntDetails';
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './redux/store';
import OrderCompleted from './screens/OrderCompleted';
import Browse from './screens/Browse';



export default function RootNavigation() {

    const Stack = createStackNavigator();
    const store = configureStore()



    const screenOptions = {
        headerShown: false
    }

    return (
        <ReduxProvider store={store}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='RestrauntDetails' component={RestrauntDetails} />
            <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
            <Stack.Screen name='Browse' component={Browse} />
        </Stack.Navigator>

    </NavigationContainer>
            </ReduxProvider>
)
}