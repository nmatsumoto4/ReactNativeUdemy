import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/circleButton';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },


});

class MemoListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList />
        <CircleButton >+</CircleButton>
      </View>
    );
  }
}

export default MemoListScreen;
