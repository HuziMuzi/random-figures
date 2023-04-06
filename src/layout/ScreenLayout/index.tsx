import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Colors} from '../../theme/Colors';

type ScreenLayoutPropsType = {
  children: React.ReactNode;
  isFetching?: boolean;
};

export const ScreenLayout = ({children, isFetching}: ScreenLayoutPropsType) => {
  return (
    <View style={styles.container}>
      {children}
      {isFetching && (
        <ActivityIndicator
          style={[StyleSheet.absoluteFill, styles.indicator]}
          size="large"
          color={Colors.Yellow}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GrayStrongDark,
  },
  indicator: {
    flex: 1,
    backgroundColor: Colors.Semitransparent,
  },
});
