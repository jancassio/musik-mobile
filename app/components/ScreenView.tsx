import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants/styles';

interface Style {}

interface Props {
  children: React.ReactNode
  style?: Style
}

class ScreenView extends Component<Props> {
  render() {
    const { children, style } = this.props;

    const styles = getStyles(style);

    return (
      <View style={styles.view}>{ children }</View>
    )
  }
}

const getStyles = (styles: Style) => StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.Primary,
    color: Colors.Secondary,
  }
})

export default ScreenView;
