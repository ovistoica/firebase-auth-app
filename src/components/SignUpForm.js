import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import authService from '../api/authRequests';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit() {
    try {
      await authService.createUser(this.state.phone);
      await authService.requestOneTimePassword(this.state.phone);
      this.setState({ signUpComplete: true });
    } catch (error) {
      console.log(error);
    }
  }

  state = { phone: '', signUpComplete: false };
  render() {
    if (this.state.signUpComplete) {
      return null;
    }

    return (
      <View>
        <Input
          style={{ marginBottom: 40 }}
          label="Enter phone number"
          onChangeText={text => this.setState({ phone: text })}
          value={this.state.phone}
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
