import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Font } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

import CircleButton from '../elements/circleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,

  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 75,
  },
  circleButtonTitle: {
    fontSize: 24,
    lineHeight: 32,
    color: '#E31676',
  },


});

class MemoDetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader} >
          <View >
            <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
            <Text style={styles.memoHeaderDate}>2017/12/12</Text>

          </View>
        </View>
        <View style={styles.memoContent}>
          <Text >
            講座のアイデアです。
          </Text>
        </View>
        <CircleButton
          color="white"
          style={styles.editButton}
          onPress={() => { this.props.navigation.navigate('MemoEdit'); }}
        >
          <MaterialIcons
            style={styles.circleButtonTitle}
            name="edit"
          />

        </CircleButton>

      </View>
    );
  }
}


export default MemoDetailScreen;
