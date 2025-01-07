import React from 'react';
import { View, Text, StyleSheet,fl } from 'react-native';
import { SafeAreaView } from 'react-native-web';

const Flaslist = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
  return (
    <SafeAreaView style={styles.container}>
        <Flaslist
            data={DATA}
            renderItem={renderItem}
            keyExtrator={item => item.id}
            />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
//   wrapper: {
//     flex:1,
//     justifyContent: 'center',
//     alignItems: 'center'   
//   },
//   container: {
//     width: 100, 
//     height: 100,
//     backgroundColor: 'blue', 
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   text: {
//     color: 'white',
//     fontSize: 16 
//   }
});

export default Flaslist;