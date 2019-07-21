import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { LoginProps } from './login.interface';

export class Login extends Component<LoginProps> {
  public render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('App')}
          title="Login" />
      </View>
    )
  }
}
export default Login;
