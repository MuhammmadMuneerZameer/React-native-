import {View,Text,Image, TextInput,  TouchableOpacity} from 'react-native';
import React ,{useState,useEffect}from 'react';
import CheckBox from 'react-native-checkbox';
import * as Font from 'expo-font';



 function Signip() {
    const [isChecked, setIsChecked] = useState(true);
    const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      MyFont: require('../Fonts/TwCenClassMTStd-Regular.otf'),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);
  if (!fontLoaded) {
    return <View />;
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image source={require('../assets/assets.png')} style={{ width: 120, height: 120 }} />
    <Text style={{ fontFamily: 'MyFont', fontWeight: '700', fontSize: 20, marginTop: 40, color: '#5DBDE0' }}>
      Log In
    </Text>

    <View style={{ alignItems: 'flex-start', marginTop: 10 }}>
      <Text style={{ fontWeight: '700', color: '#4D4C4C' }}>Cell-Phone Number</Text>
      <TextInput
        placeholder='+63 02 1234 5640'
        style={{
          borderWidth: 1,
          borderRadius: 4,
          borderColor: '#5DBDE0',
          paddingRight: 60,
          textAlign: 'left',
          paddingLeft: 10,
          width: 250,
        }}
      />
    </View>

    <View style={{ alignItems: 'flex-start', marginTop: 10 }}>
      <Text style={{ fontWeight: '700', color: '#4D4C4C' }}>Password</Text>
      <TextInput
        placeholder='Enter your Password'
        style={{
          borderWidth: 1,
          borderRadius: 4,
          borderColor: '#5DBDE0',
          paddingRight: 60,
          paddingLeft: 10,
          width: 250,
        }}
      />
    </View>

    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
      <CheckBox
        style={{}}
        isChecked={isChecked}
        onValueChange={() => setIsChecked(!isChecked)}
        disabled={false}
        label="remember me"
      />
      <Text style={{ color: '#5DBDE0', textDecorationLine: 'underline' }}>Forgot Password</Text>
    </View>
  
    <TouchableOpacity style={{borderRadius: 6,
        backgroundColor:"#5DBDE0" ,
        display:'flex' ,
        marginTop:30,
        paddingLeft:110,
        paddingRight:110 ,
        paddingTop:15,
        paddingBottom:15}}><Text style={{color:'white'}}>Login</Text></TouchableOpacity>
        <Text style={{marginTop:20, color:'#4D4C4C'}}>Don’t Have a Accounts? <Text style={{color:'#5DBDE0', textDecorationLine:'underline',}}>Register</Text> </Text>

  </View>

  )
}
export default Signip;
