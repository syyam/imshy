import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, } from "react-navigation";

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreenReal from './screens/LoginScreenReal'
import VisionScreen from './screens/VisionScreen'
import InputDetailScreen from './screens/InputDetailScreen'
import InputSubmittedScreen from './screens/ImputSubmitted'
import DiscoverHomeScreen from './screens/DiscoverHomeScreen'
import DiscoverLocationScreen from './screens/DiscoverLocationScreen'
import Camera from './Components/Camera'
import PotentialConnection from './screens/PotentialConnection'
import ConfirmUser from './screens/ConfirmUser'
import TakePicture from './screens/TakePicture'
import ConfirmationPage from './screens/ConfirmationPage'
import HowItWorks from './screens/HowItWorks'
import UserProfile from './screens/UserProfile'
import Notification from './screens/Notification'
import UserProfileOther from './screens/UserProfileOther'
import Messages from './screens/Messages'



const AppNavigator = createStackNavigator({

  Login: LoginScreen,
  Home: HomeScreen,
  LoginReal: LoginScreenReal,
  Vision: VisionScreen,
  InputDetail: InputDetailScreen,
  InputSubmitted: InputSubmittedScreen,
  DiscoverHome: DiscoverHomeScreen,
  DiscoverLocation: DiscoverLocationScreen,
  Camera: Camera,
  PotCon: PotentialConnection,
  ConfirmUser: ConfirmUser,
  TakePicture: TakePicture,
  ConfirmationPage: ConfirmationPage,
  HowItWorks: HowItWorks,
  UserProfile: UserProfile,
  Notification: Notification,
  UserProfileOther: UserProfileOther,
  Messages:Messages

});

export default createAppContainer(AppNavigator);

