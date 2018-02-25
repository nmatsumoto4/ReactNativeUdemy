import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoList from './src/components/MemoList';
import Appbar from './src/components/appBar';
import CircleButton from './src/elements/circleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },


});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <MemoList />
        <CircleButton >+</CircleButton>
      </View>
    );
  }
}

