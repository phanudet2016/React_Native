import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TextInput
} from 'react-native';
import mockdata from './mockdata';
import Header from './src/components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default class App extends Component {

  constructor (props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      text: ''
    }
  }

  componentDidMount () {
    this.getSongFromApi();
  }
  
  onChangeTexts = (e) => {
    this.getSongFromApi(e.toLowerCase());
  }

  getSongFromApi (term) {
    return fetch(`https://itunes.apple.com/search?term=${term}&media=music`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson.results)
        });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  renderSong (data) {
    return (
      <View style={styles.container}>
        <Image source={{uri: data.artworkUrl60}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.song}>{data.trackName}</Text>
          <Text style={styles.album}>{data.collectionName}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
      <Header/>
      <TextInput 
        placeholder='Type Artist here'
        onChangeText={this.onChangeTexts}
      />
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderSong}
        style={styles.listView}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1
  },
  album: {
    fontSize: 10,
    marginLeft: 5
  },
  song: {
    fontSize: 13,
    marginLeft: 5
  },
  thumbnail: {
    width: 60,
    height: 60
  },
  listView: {
    padding: 20,
    backgroundColor: '#F5FCFF'
  },
  input: {

  }
});
