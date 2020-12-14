/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useMemo, useReducer} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthContext} from './components/context';

import RootStackScreen from './screens/RootStackScreen';

import MainTabScreen from './screens/MainTabScreem';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';

import AsyncStorage from '@react-native-community/async-storage';
import DrawerContent from './screens/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  // Here we create ou reducer for the login

  //1 First initial state
  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
  };

  // 2 creating the reducer  login function
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  // 3 => calling the reducer login
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async (email, password) => {
        // setUserToken('@samba');
        // setIsLoading(false);
        let userToken = null;
        userToken = null;
        if (email === 'sambabhouria@gmail.com' && password === 'bhouria') {
          try {
            // in the real apps token will be fethc from the data base
            userToken = '@samba';
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.log(e);
          }
        }
        dispatch({type: 'LOGIN', id: email, token: userToken});
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          // in the real apps token will be fethc from the data base
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        // setUserToken('@samba');
        //setIsLoading(false);
      },
    }),
    [],
  );

  // juste for simulate loginn after 2 seconde
  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        // in the real apps token will be fethc from the data base
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token', userToken);
      dispatch({type: 'REGISTER', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
