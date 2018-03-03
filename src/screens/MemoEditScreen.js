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

class MemoEditScreen extends Component {
  state = {
    body: '',
    key: '',
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    console.log(params);
    this.setState({
      body: params.memo.body,
      key: params.memo.key,
    });
  }
  handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const newDate = new Date();
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
      .update({
        body: this.state.body,
        createdOn: newDate,
      })
      .then(() => {
        const { navigation } = this.props;
        navigation.state.params.returnMemo({
          body: this.state.body,
          key: this.state.key,
          createdOn: newDate,
        });
        navigation.goBack();
      })
      .catch((error) => {
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

export default MemoEditScreen;
