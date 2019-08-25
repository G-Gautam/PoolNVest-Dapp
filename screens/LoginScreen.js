import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ColorPropType,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { HitTestResultTypes } from 'expo/build/AR';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      validateEmail: false,
      password: '',
    };
  }

  onClickListener = viewId => {
    if (viewId == 'login') {
      //api call to login
      this.getLogin()
    }
    else if (viewId == 'register') {
      //api call to register
      fetch('http://100.64.228.206:3000/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state['email'],
          password: this.state['password'],
        }),
      }).then((response) => response.json())
        .then((responseJson) => {
          return responseJson.movies;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  getLogin() {
    url = 'http://100.64.228.206:3000/api/users/getuser/' + this.state['email'];
    var password = this.state['password'];
    var pro = this.props;
    axios.get(url)
      .then(function (response) {
        if (response.data.user.password == password) {
          pro.navigation.navigate('Main');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <LinearGradient colors={['#FFFFFF', '#231464']} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/images/Pool.png')} />
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}

              source={{
                uri: 'https://img.icons8.com/officel/40/000000/email.png',
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db',
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
            />
          </View>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.onClickListener('login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.registerButton]}
            onPress={() => this.onClickListener('register')}>
            <Text style={styles.loginText}>Register</Text>
          </TouchableHighlight>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#054A91'
  },
  logo: {
    width: 400,
    height: 400,
    top: -10,
  },
  inputContainer: {
    top: -80,
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    top: -88,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 20,
  },
  loginButton: {
    backgroundColor: '#1d1152',
  },
  registerButton: {
    backgroundColor: '#ffae00',
  },
  loginText: {
    color: 'white',
  },
});
