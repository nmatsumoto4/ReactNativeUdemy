import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, TextInput } from 'react-native';
import firebase from 'firebase';

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    width: '100%',
    padding: 24,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 18,
    backgroundColor: '#eee',
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

class LoginScreen extends Component {
  state = {
    email: 'nmatsumoto4@gmail.com',
    password: 'ul8gul8g',
  }
  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log(user);
        this.props.navigation.navigate('Home', { currentUser: user });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.cotainer}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={this.state.email}
          placeholder="Email Address"
        />
        <TextInput
          onChangeText={(text) => { this.setState({ password: text }); }}
          style={styles.input}
          value={this.state.password}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry

        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
        >
          <Text style={styles.buttonTitle}>
            ログインする
          </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default LoginScreen;
