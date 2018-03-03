import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import firebase from 'firebase';
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

class MemoCreateScreen extends Component {
  state = {
    body: '',

  }
  handlePress() {
    const db = firebase.firestore();
    const { params } = this.props.navigation.state;
    console.log(params);
    db.collection(`users/${params.currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
      .then((docRef) => {
        console.log(docRef.id);
      })
      .catch(() => {
        console.log(error);
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput
          multiline
          style={styles.memoEditInput}
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
        />

        <CircleButton onPress={this.handlePress.bind(this)}>
          <MaterialIcons name="check" style={styles.circleButtonTitle} />
        </CircleButton>
      </View>
    );
  }
}

export default MemoCreateScreen;
