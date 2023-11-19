import { View, Text ,Image} from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Signip from './screens/Signip'



const SplashScreen = ({navigation}) => {
    const logo = require('./assets/assets.png');
  const lottieAnimation = require('./assets/animation.json');
  setTimeout(()=>{
   navigation.navigate('Home')
  },3000)
  return (
    
    <View style={{flex:1, alignItems:'center' ,justifyContent: 'center'}}>
         <Image
        source={logo}
        style={{ width: 100, height: 100 }}
      />
      <AnimatedLottieView
      autoPlay
        loop
        source={lottieAnimation}
        style={{ width: 200, height: 20 ,justifyContent:'center', alignItems:'center',display:'flex', marginRight:15, marginTop:20 }}/>
        
      
    </View>
  )
}

export default SplashScreen