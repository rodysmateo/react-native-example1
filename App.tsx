import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ShoppingCart from './src/components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <ShoppingCart />
    )
  }
  }
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;