import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Colors } from '../../constants/styles';
import T11y from '../T11y';

interface Style {}

interface Props {
  children: React.ReactNode
  style?: Style
}

class FeaturesView extends Component<Props> {
  render() {
    const { style } = this.props;

    const styles = getStyles(style);

    return (
      <View style={styles.view}>
        <T11y.Headline>Features</T11y.Headline>
        <T11y.Body>With Sondbuzz, allows you to be in touch with your favourite artists.</T11y.Body>
        <Button title="Continue" onPress={null} />
      </View>
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

export default FeaturesView;
