import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackNavigator from './navigators/AuthStackNavigator';





const RootStack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{
        headerShown:false,
      }}>
        <RootStack.Screen name={'RootStack'} component={AuthStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
