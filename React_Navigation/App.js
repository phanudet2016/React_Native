import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity ,StatusBar, TextInput, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginForm from './src/components/Login/LoginForm'
import Header from './src/components/Header/Header'

export default class App extends Component {
  render() {
    return (
      <RootStack/>
    );
  }
}

class HomeScreen extends React.Component {

  _chechAuth () {
    if (true) {
      this.props.navigation.navigate('Details')
    } else {

    }
  }
  render() {
    return (
      <View>
        <Header/>
        <View style={styles.Card}>
          <Text>Home Screen</Text>
        </View>
        <TouchableOpacity style={styles.addButton}
          onPress={() => this.props.navigation.navigate('MyModal')}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  // static navigationOptions = ({ navigation, navigationOptions }) => {
  //   const { params } = navigation.state;

  //   return {
  //     //title: params ? params.otherParam : 'A Nested Details Screen',
  //     /* These values are used instead of the shared configuration! */
  //     headerStyle: {
  //       backgroundColor: navigationOptions.headerTintColor,
  //     },
  //     headerTintColor: navigationOptions.headerStyle.backgroundColor,
  //   };
  // };

  render() {
    const { navigation } = this.props
    const itemId = navigation.getParam('itemId');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        {/* <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
        /> */}
      </View>
    );
  }
}

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{width: 405}} />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="ADD Class"
        />
      </View>
    );
  }
}

class SignInScreen extends React.Component {
  render() {
    return (
      <View style={LoginStyles.container}>
        <View  style={LoginStyles.logoContainer}>
          <Image 
            style={LoginStyles.logo}
            source={require('./src/Image/Octocat.png')}
          />
          <Text 
          style={LoginStyles.title}>
            Application FITM Classroom
          </Text>
        </View>

        {/* FORM INPUT */}
        <View>
          <View style={formStyles.container}>
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
              style={formStyles.input}
            />
            <TextInput
              underlineColorAndroid='transparent'
              placeholderTextColor="rgba(255,255,255,0.7)"
              placeholder="password"
              returnKeyType="go"
              ref={(input) => this.passwordInput = input}
              secureTextEntry
              style={formStyles.input}
            />
            <TouchableOpacity style={formStyles.ButtonContainer}
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Text style={formStyles.ButtonText}>LOGIN</Text>
            </TouchableOpacity>  
           </View>
        </View>
      </View>
    );
  }
}

const MainStack = createStackNavigator(
  // Config Screen
  {
    Auth: {
      screen: SignInScreen,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
        // headerStyle: {
        //   backgroundColor: '#6c5ce7',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // }
      }
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }
    }
  },

  // Home Page
  {
    initialRouteName: 'Auth'
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: -500,
    backgroundColor: '#6c5ce7',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 35
  },
  Card: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  CardSection: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});

// LOIGN Styles
const formStyles = StyleSheet.create({
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

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74b9ff',
  },
  logoContainer: {

  },
  formContainer: {
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
});
// END LOIGN Styles
