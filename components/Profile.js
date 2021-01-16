import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import Constants from 'expo-constants';
import { avatar, background } from './data';

export default class Profile extends Component {


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
          <Text style={styles.textStyle}>Hello...</Text>
          <Text style={[styles.textStyle, styles.marginStyle]}>Deepak Sharma</Text>
          {/* <Image source={avatar} style={styles.avatar} /> */}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1
  },
  textStyle:{
    position: 'absolute', 
    top: 50, 
    fontSize: 24, 
    fontFamily: 'sans-serif',
    fontWeight: "bold",
    justifyContent: 'center', 
    alignItems: 'center', 
    color:'white',
    padding: 4,
  },
  marginStyle:{
    marginTop: 30
  },
  background: {
    width: '100%',
    height: 200,
  },
  content: {
    flex: 1,
    marginTop: 80,
    marginHorizontal: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderWidth: 0.7,
    borderRadius: 50,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 130,
  },
  actionRow: {
    width: '100%',
    height: '50',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    marginLeft: 15,
    fontWeight: '500',
  },
});