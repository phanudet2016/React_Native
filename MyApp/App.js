import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ListView,
  TouchableHighlight,
  Modal,
  TextInput
} from 'react-native';
const styles = require('./app/style');

import Toolbar from './app/components/Toolbar/Toolbar';
import Addbutton from './app/components/AddButton/AddButton';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDW8ubPkqmw6WmUgX9GZbOWBKLyrrFie6o",
  authDomain: "todos-47d16.firebaseapp.com",
  databaseURL: "https://todos-47d16.firebaseio.com",
  projectId: "todos-47d16",
  storageBucket: "todos-47d16.appspot.com",
  messagingSenderId: "415728897270"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  constructor () {
    super();
    let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state =  {
      text: '',
      itemDataSource: ds,
      modalVisible: false
    }
    this.itemsRef = this.getRef().child('Items');

    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  setModalVisible (visible) {
    this.setState({modalVisible: visible});
  }

  getRef () {
    return firebase.database().ref();
  }

  componentWillMount () {
    this.getItem(this.itemsRef);
  }

  componentDidMount () {
    // this.getItem(this.itemsRef);
  }

  getItem (itemsRef) {
    //let items = [{title: 'Item 1'},{title: 'item 3'}];
    itemsRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
        this.setState({
          itemDataSource: this.state.itemDataSource.cloneWithRows(items)
        });
      });
    });
  }

  pressRow () {
    console.log(item);
  }

  renderRow (item) {
    return (
      <TouchableHighlight onPress={() => {
        this.pressRow(item);
      }}>
        <View style={styles.li}>
          <Text style={styles.liText}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  addItem () {
    this.setModalVisible(true);
  }

  render() {
    return (
      <View style={styles.container}>

      <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}>
          <View style={{marginTop: 22}}>
            <View>
              <Toolbar title="ADD Item" />
              <TextInput 
                value={this.state.text}
                placeholder="Add Item"
                onChangeText = {(value) => this.setState({text:value})}
              />
              <TouchableHighlight
                onPress={() => {
                  this.itemsRef.push({title: this.state.text});
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Save Item</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <Toolbar title="ชั้นเรียน"/>
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
        <Addbutton onPress={this.addItem.bind(this)} title="ADD Item" />
      </View>
    );
  }
}
