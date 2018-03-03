import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Font } from 'expo';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,

  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    zIndex: 10,
  },

});

class CircleButton extends Component {
  render() {
    const { style, color } = this.props;
    let bgColor = '#E31676';
    if (color === 'white') {
      bgColor = '#fff';
    }
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={[styles.container, style]}
        underlayColor="transparent"
      >
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {this.props.children}
        </View>
      </TouchableHighlight>

    );
  }
}

export default CircleButton;
