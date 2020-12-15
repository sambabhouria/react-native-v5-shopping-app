/* eslint-disable no-alert */
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ElectronicsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Bookmark Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default ElectronicsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
