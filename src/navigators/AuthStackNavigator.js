
import React from 'react';


import { RegistrationScreen } from '../screens/RegistrationScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';


const AuthStack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
        <AuthStack.Navigator
        screenOptions={{
            headerShown:false,
          }}
        >
            <AuthStack.Screen name={'Login'} component={LoginScreen} />
            <AuthStack.Screen name={'Registration'} component={RegistrationScreen} />
        </AuthStack.Navigator>
  );
}