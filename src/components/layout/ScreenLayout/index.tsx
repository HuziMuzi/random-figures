import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '@src/theme/Colors';

type ScreenLayoutPropsType = {
  children: React.ReactNode;
};

export const ScreenLayout = ({children}: ScreenLayoutPropsType) => {
  return (
    <View style={styles.container}>
      {children}
      {/*{isFetching && <Loader />}*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GrayStrongDark,
  },
});
