import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
import Profile from "./components/Profile";
import CustomerCard from "./components/CustomerCard";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  SafeAreaView,
  Dimensions,
} from "react-native";

export default class App extends Component {
  state = {
    y: new Animated.Value(0),
  };
  render() {
    const { y } = this.state;
    return (

      <SafeAreaView style={styles.root}>
        <View>
          <View>
            <Profile/>
          </View>
          <View style={{marginTop:150}}>
            <CustomerCard/>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
