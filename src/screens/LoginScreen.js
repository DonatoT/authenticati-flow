import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import TextButton from '../components/TextButton';
import Error from '../components/Error';



export  function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>

        <Heading style={styles.title}> LOGIN </Heading>
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
        title={'Login'} 
        style={styles.LoginButton} 
        onPress={() => {
            navigation.navigate('Registration')
        }}
        />
        <TextButton 
            title={'Have you an account? create one'}
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
  },
  
  title:{
      marginBottom:32,
  },

  input:{
      marginVertical:8,
  },
  LoginButton:{
      marginVertical: 30
  }
 
});
