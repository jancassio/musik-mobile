import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';
import { Fonts } from '../../constants/assets';

interface Props {
  children?: string;
}

function Placeholder(props: Props) {
  const { children } = props;

  return (
    <Text style={styles.text}>{ children }</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.SanFranciscoTextMedium,
    fontSize: 12,
    color: Colors.Secondary,
  }
})

export default Placeholder;
