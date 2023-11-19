import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from './SplashScreen'
import Signip from './screens/Signip'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App (){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Signip}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}




// flex:1, alignItems:'center' ,justifyContent: 'center'