import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import CircleButton from '../elements/circleButton';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 36,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
  circleButtonTitle: {
    fontSize: 24,
    lineHeight: 32,
    color: '#fff',
  },
});

class MemoEditScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          multiline
          style={styles.memoEditInput}
          value="s"
        />

        <CircleButton onPress={() => { this.props.navigation.goBack(); }}>
          <MaterialIcons name="check" style={styles.circleButtonTitle} />
        </CircleButton>
      </View>
    );
  }
}

export default MemoEditScreen;
