import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../../theme/Colors';

type TitlePropsType = {
  text: string;
};

export const Title = ({text}: TitlePropsType) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: Colors.White,
    marginBottom: 15,
    fontWeight: '500',
  },
});
