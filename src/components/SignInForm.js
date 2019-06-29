import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import authService from '../api/authRequests';
import firebase from 'firebase';

export default class SignInForm extends Component {
  state = { phone: '', code: '', isLoggedIn: false };

  handleSubmit = async () => {
    try {
      let response = await authService.verifyOneTimePassword(
        this.state.phone,
        this.state.code
      );
      if (response.token) {
        this.setState({ isLoggedIn: true });
        firebase.auth().signInWithCustomToken(response.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <View style={this.props.style}>
          <Text> Congratulations! You are logged in</Text>
        </View>
      );
    }
    return (
      <View style={this.props.style}>
        <Input
          style={{ marginBottom: 40 }}
          label="Enter phone number"
          onChangeText={phone => this.setState({ phone })}
          value={this.state.phone}
        />

        <Input
          style={{ marginBottom: 40 }}
          label="Enter code"
          onChangeText={code => this.setState({ code })}
          value={this.state.code}
        />
        <Button
          style={{ marginTop: 10 }}
          title="Submit"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}
