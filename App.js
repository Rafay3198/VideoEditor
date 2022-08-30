/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';


const functions = {
  _pickVideo: async() => {
    await launchImageLibrary({
      mediaType:'video'
    }).then((data) => {
      alert(JSON.stringify(data))
    }).catch((e) => alert(JSON.stringify(e)))
  }
}

const App = () => {
 
  return (
    <View style={{flex:1, justifyContent:'center'}}>
      <Button 
        title='Pick Video'
        onPress={functions._pickVideo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
