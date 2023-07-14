import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { enableScreens } from 'react-native-screens';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'

import HomeScreen from './containers/HomeScreen';
import ElectronicsScreen from './containers/ElectronicsScreen';
import BooksScreen from './containers/BooksScreen';
import Onboarding from "../Authentication/Onboarding/Onboarding";

// enableScreens(false);

// function ShoppingCart() {
//   return (
//     <NavigationContainer >
//       <AppStackNavigator.Navigator>
//         <AppStackNavigator.Screen name="Home" component={HomeScreen}  />
//         <AppStackNavigator.Screen name="Electronics" component={ElectronicsScreen} />
//         <AppStackNavigator.Screen name="Books" component={BooksScreen} />
//       </AppStackNavigator.Navigator>
//     </NavigationContainer>
//   );
// }

// export default ShoppingCart;

// const AppStackNavigator = createStackNavigator();

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
  <AuthenticationStack.Navigator screenOptions={{headerShown: false}} >
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  )
};