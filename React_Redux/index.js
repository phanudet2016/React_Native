// import App from './App';
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
 
// สร้าง Component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList/>
  </View>
);

AppRegistry.registerComponent('React_Redux', () => App);
