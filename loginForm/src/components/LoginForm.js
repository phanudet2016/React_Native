import React, { Component } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
        barStyle="light-content"
        />
        <TextInput
          underlineColorAndroid='transparent'
          placeholderTextColor="rgba(255,255,255,0.7)"
          placeholder="username or email"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid='transparent'
          placeholderTextColor="rgba(255,255,255,0.7)"
          placeholder="password"
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.ButtonContainer}>
          <Text style={styles.ButtonText}>LOGIN</Text>
        </TouchableOpacity>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    borderBottomColor: 'red'
  },
  ButtonContainer: {
    backgroundColor: '#0984e3',
    paddingVertical: 10
  },
  ButtonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});