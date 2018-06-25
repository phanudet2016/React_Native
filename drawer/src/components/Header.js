import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Image
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{ height: 40, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <TouchableOpacity 
          style={{marginLeft: 10}}
          onPress={() => {
            // const { navigate } = this.props.navigation;
            // navigate('DrawerOpen');
            this.props.navigation.openDrawer();  
          }}>
          <Image
            style={{ width: 20, height: 20}}
            source={require('../../Image/menu.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

