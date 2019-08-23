/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Platform, StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from "./components/HomeScreen";
import Game from "./components/Game";
import Setting from "./components/Setting"

const MainNavigator = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  Game: {screen: Game},
  Setting: {screen: Setting},
});

const App = createAppContainer(MainNavigator);

export default App;



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   }
// });
