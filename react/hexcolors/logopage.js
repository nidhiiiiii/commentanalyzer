import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LogoPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Logo Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default LogoPage;