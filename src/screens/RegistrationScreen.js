import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import TextButton from '../components/TextButton';
import Error from '../components/Error';
import Iconbutton from '../components/Iconbutton';



export  function RegistrationScreen({navigation}) {
    const CloseIconName = Platform.OS === 'ios' ? 'ios-close-circle-outline' : 'md-close-circle-outline'
  return (
    <View style={styles.container}>

        <Heading style={styles.title}> REGISTRATION </Heading>
        <Iconbutton 
        style={styles.closeIcon} 
        name={CloseIconName}
        onPress={() => {
            navigation.pop();
        }} />
        <Error error={''}/>
        <Input 
            style={styles.input} 
            placeholder={'Email'} 
            keyboardType={'email-address'}
        />
        <Input 
            style={styles.input} 
            placeholder={'password'}
            secureTextEntry
        />
        <FilledButton 
        title={'Regster'} 
        style={styles.LoginButton} 
        onPress={() => {}}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     paddingTop: 120,
     alignItems: 'center',
     padding:20,
     backgroundColor:'white'
  },
  
  title:{
      marginBottom:32,
  },

  input:{
      marginVertical:8,
  },
  LoginButton:{
      marginVertical: 30
  },
  closeIcon: {
      position:'absolute',
      top:60,
      right:20,


  }

 
});
