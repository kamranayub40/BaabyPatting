import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screen/SplashScreen';
import LoginScreen from '../Screen/LoginScreen';
import SignupScreen from '../Screen/SignUpScreen';
import BluetoothScreen from '../Screen/BluetoothScreen';
import ProductSelectScreen from '../Screen/ProductSelectScreen';
import HomeScreen from '../Screen/HomeScreen';

const Main_Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          component={SplashScreen}
          name="SplashScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={BluetoothScreen}
          name="BluetoothScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={LoginScreen}
          name="LoginScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={SignupScreen}
          name="SignupScreen"
          options={{headerShown: false}}
        />
          <Stack.Screen
          component={ProductSelectScreen}
          name="ProductSelectScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={HomeScreen}
          name="HomeScreen"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main_Navigation;
