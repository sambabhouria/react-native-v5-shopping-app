import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.homeScreenContainer}>
      <Text>Home Screen</Text>
      <Button
        title="Go to detials screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.homeScreenContainer}>
      <Text>Details Screen</Text>
      <Button
        title="Go to detials screen...again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go to Home screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go to Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to the first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
