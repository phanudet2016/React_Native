import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  Image
} from 'react-native';
import { Info} from '../../screenName'
import Header from './Header'

const backgroundColor = '#0067a7';
export default class HomeComponent extends Component {

  static navigationOptions = ({ navigation }) => {
    let drawerLable = 'Home';
    let drawerIcon = () => (
      <Image
        source={require('../../Image/home_icon.png')}
        style={{ width: 26, height: 26, tintColor: backgroundColor}}
      />
    )
    return {drawerLable, drawerIcon};
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column'}}>
        <Header {...this.props}/>
        <View style={{ flex: 1, backgroundColor: '#6c5ce7',alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#FFF'}}>
            This is Home Screen
          </Text>
          <TouchableHighlight 
            style={{ margin: 20, width: 200, height: 45, backgroundColor: 'darkviolet', padding: 10, alignItems: 'center'}}
            onPress={() => {
              const { navigate } = this.props.navigation;
              navigate(Info);    
            }    
          }>
            <Text style={{color: '#FFF', fontSize: 18,}}>
              Navigate to info
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}