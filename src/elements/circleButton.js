import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  memoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
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
  memoAddButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },
});

class CircleButton extends Component {
  render() {
    const { style, color } = this.props;
    let bgColor = '#E31676';
    let textColor = '#fff';
    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }
    return (
      <View style={[styles.memoAddButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.memoAddButtonTitle, { color: textColor }]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

export default CircleButton;
