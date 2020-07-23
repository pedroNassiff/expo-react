import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Somos404</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000000",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#ffffff",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
