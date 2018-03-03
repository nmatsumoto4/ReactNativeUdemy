import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, TextInput } from 'react-native';

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

class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.cotainer}>
        <Text style={styles.title}>メンバー登録する</Text>
        <TextInput
          style={styles.input}
          value="Email Address"
        />
        <TextInput
          style={styles.input}
          value="Password"
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => { }}
          underlayColor="#C70F66"
        >
          <Text style={styles.buttonTitle}>
            送信する
          </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default SignUpScreen;
