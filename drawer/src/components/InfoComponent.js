import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  Image
} from 'react-native';
import Header from './Header'

const backgroundColor = '#0067a7';
export default class InfoComponent extends Component {

  static navigationOptions = ({ navigation }) => {
    let drawerLable = 'Info';
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
        <View style={{ flex: 1, backgroundColor: '#00b894',alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#FFF'}}>
            This is Info Screen
          </Text>
          <TouchableHighlight 
            style={{ margin: 20, width: 200, height: 45, backgroundColor: 'darkviolet', padding: 10, alignItems: 'center'}}
            onPress={() => {
              this.props.navigation.goBack(); 
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