import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  state = {
    email: '',
    password: ''
  }

  componentWillMount () {
    const firebaseConfig = {
      apiKey: 'AIzaSyDW8ubPkqmw6WmUgX9GZbOWBKLyrrFie6o',
      authDomain: 'todos-47d16.firebaseapp.com'
    }
    firebase.initializeApp(firebaseConfig);
  }
  
  onPressSignIn () {
    this.setState({
      authenticating: true
    });
  }

  renderCurrentState () {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size='large'/>
        </View>
      );
    }

    return (
      <View style={styles.form}>
        <Input 
          placeholder='Enter your email...'
          label='Email'
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Input 
          placeholder='Enter your password...'
          label='Password'
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button onPress={() => this.onPressSignIn()}>Log in</Button>
      </View>
    );
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.renderCurrentState()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    padding: 20,
    flexDirection: 'row'
  },
  form: {
    flex: 1
  }
});
