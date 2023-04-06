import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScreenLayout} from '../../../layout/ScreenLayout';
import {Title} from '../../../components/Title/Title';
import {AppButton} from '../../../components/AppButton/AppButton';

export const HomeScreen = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Title text="Home screen" />
        <View style={styles.logoutButtonContainer}>
          <AppButton title="Logout" onPress={() => {}} />
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButtonContainer: {
    width: 90,
  },
});
