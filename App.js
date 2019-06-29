import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';
import firebase from 'firebase';
import { firebaseConfig } from './config/firebase.json';

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
