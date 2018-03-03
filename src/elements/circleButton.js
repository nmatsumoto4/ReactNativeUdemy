import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font } from 'expo';

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
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
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        {this.props.children}
      </View>
    );
  }
}

export default CircleButton;
