import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreenReal from './screens/LoginScreenReal'
import VisionScreen from './screens/VisionScreen'
import InputDetailScreen from './screens/InputDetailScreen'
import InputSubmittedScreen from './screens/ImputSubmitted'
import DiscoverHomeScreen from './screens/DiscoverHomeScreen'
import Camera from './Components/Camera'

const AppNavigator = createStackNavigator({

  Login: LoginScreen,
  Home: HomeScreen,
  LoginReal: LoginScreenReal,
  Vision: VisionScreen,
  InputDetail: InputDetailScreen,
  InputSubmitted: InputSubmittedScreen,
  DiscoverHome: DiscoverHomeScreen,
  Camera:Camera

});

export default createAppContainer(AppNavigator);

