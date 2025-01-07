import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.wrapper}>
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'   
  },
  container: {
    width: 100, 
    height: 100,
    backgroundColor: 'blue', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 16 
  }
});

export default App;