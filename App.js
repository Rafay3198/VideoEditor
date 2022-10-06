/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useEffect } from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  View,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';



const functions = {
  _pickVideo: async () => {
    const url = 'https://www.apmpllc.com';
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log('Can\'t handle url: ' + url);
        } else {
          return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
    // await launchImageLibrary({
    //   mediaType:'video'
    // }).then((data) => {
    //   alert(JSON.stringify(data))
    // }).catch((e) => alert(JSON.stringify(e)))
  }
}

class App extends Component {

  componentDidMount () {
    Linking.addEventListener('url', this.handleOpenURL);
    this._getInitialURL()
    
    Linking.getInitialURL((url) => {
      alert("GET INITIAL URL", JSON.stringify(url))
    }).catch((e) => console.log(e))
  }

  async _getInitialURL () {
    const initialUrl = await Linking.getInitialURL();
    setTimeout(() => {
      alert(initialUrl);
    }, 1000);
  }

  componentWillUnmount() {
    Linking.removeAllListeners('url', this.handleOpenURL)
  }


  handleOpenURL (data) {
    alert("EVENT LISTNER", JSON.stringify(data))
  }

  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button
          title='Open URL'
          onPress={functions._pickVideo}
        />
      </View>
    );
  }
  
};

const styles = StyleSheet.create({

});

export default App;
