import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../../theme/Colors';

type TitlePropsType = {
  children: React.ReactNode;
};

export const Title = ({children}: TitlePropsType) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: Colors.White,
    marginBottom: 15,
    fontWeight: '500',
  },
});
