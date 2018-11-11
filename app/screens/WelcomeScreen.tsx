import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Style {}
interface Props {
  style: Style
}

const getStyles = (style: Style) => StyleSheet.create({
  view: {
    flex: 1,
  }
})

class WelcomeScreen extends Component<Props, {}> {
  render() {
    const { view } = getStyles(this.props.style);
    return (
      <View style={view}>
        <Text>WelcomeScreen</Text>
      </View>
    )
  }
}

export default WelcomeScreen