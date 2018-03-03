import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from 'firebase';
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
  state = {
    memoList: [],
  }
  componentWillMount() {
    const { currentUser } = firebase.auth();
    firebase.firestore().collection(`users/${currentUser.uid}/memos`)
      .get()
      .then((snapshot) => {
        const memoList = [];
        snapshot.forEach((doc) => {
          memoList.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        this.setState({ memoList });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
        <CircleButton onPress={this.handlePress.bind(this)}>
          <MaterialIcons name="add" style={styles.circleButtonTitle} />
        </CircleButton>
      </View>
    );
  }
}

export default MemoListScreen;
