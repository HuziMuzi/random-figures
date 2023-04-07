import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/Colors';

type RoundButtonPropsType = {
  onPress: () => void;
  children: React.ReactNode;
};

export const RoundButton = ({onPress, children}: RoundButtonPropsType) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: Colors.Yellow,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});
