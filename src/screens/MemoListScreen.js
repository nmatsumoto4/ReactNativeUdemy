import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/circleButton';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
  circleButtonTitle: {
    fontSize: 24,
    lineHeight: 32,
    color: '#fff',
  },


});

class MemoListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton onPress={() => { this.props.navigation.navigate('MemoEdit'); }}>
          <MaterialIcons name="add" style={styles.circleButtonTitle} />
        </CircleButton>
      </View>
    );
  }
}

export default MemoListScreen;
