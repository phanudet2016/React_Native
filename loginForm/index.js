import { AppRegistry } from 'react-native';
import App from './App';
//import React, { Component } from 'react';
// import Login from './src/components/Login';
// import Splash from './src/components/Splash';

// class Main extends Component {
//   constructor (props) {
//     super(props);
//     this.state = { currenScreen: 'Splash'};
//     console.log(555)
//     setTimeout(() => {
//       this.setState({ currenScreen: 'Login' })
//     }, 1000)
//   }

//   render () {
//     const { currenScreen } = this.state
//     let mainScreen = currenScreen === 'Splash' ? <Splash/> : <Login/>
//     return mainScreen
//   }
// }

AppRegistry.registerComponent('loginForm', () => App);
