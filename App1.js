import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity,Button, Text, TextInput, View } from 'react-native';
import Cat from './component/Cat';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Thông báo</Text>
        <Cat title="Bước 1 Xác định nhu cầu khách hàng"/>
        <Cat content="Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00"/>
        <Cat date="20/08/2020, 06:00"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
  },
  login: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
  },
});