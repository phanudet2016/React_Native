import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { itemsRef } from './src/components/firebase'

export default class App extends Component {
  constructor () {
    super();
    this.itemsRef = itemsRef
    this.array = []
  }

  componentWillMount () {
    // this.itemsRef.once('value', (data) => {
    //   console.log(data.toJSON());
    // })
    // this.pushItem(this.itemsRef);
  }

  // pushItem (itemsRef) {
  //   itemsRef.push({
  //     s: 555
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
