import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#DDD',
    backgroundColor: '#eee',

  },
});

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.props.children}</Text>
      </View>
    );
  } ''
}

export default BodyText;

