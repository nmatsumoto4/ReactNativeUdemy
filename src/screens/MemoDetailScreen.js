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
  memoBody: {
    lineHeight: 22,
    fontSize: 14,
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
const dateString = (date) => {
  return date.toISOString().split('T')[0];
};


class MemoDetailScreen extends Component {
  state = {
    memo: {},
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }


  render() {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader} >
          <View >
            <Text style={styles.memoHeaderTitle}>{memo.body.substring(0, 10)}</Text>
            <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>

          </View>
        </View>
        <View style={styles.memoContent}>
          <Text style={styles.memoBody}>
            {memo.body}
          </Text>
        </View>
        <CircleButton
          color="white"
          style={styles.editButton}
          onPress={() => { this.props.navigation.navigate('MemoEdit', { memo }); }}
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
