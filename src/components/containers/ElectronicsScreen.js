import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


class ElectronicsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ElectronicsScreen</Text>
      </View>
    )
  }
}

export default ElectronicsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})