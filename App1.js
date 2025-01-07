import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity,Button, Text, TextInput, View } from 'react-native';
import Cat from './component/Cat';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
    return (
        <View style={styles.container}>
          <Cat
            backgroundColor='#c5d5e5'
            title="Bước 1 Xác định nhu cầu khách hàng"
            text="Vũ Văn Hoàng sắp hết hạn lúc 01/08/2020 9:00" 
            time="20/08/2020, 6:00" 
          />
          <Cat 
            backgroundColor='#c5d5e5'
            title="Bạn có khách hàng mới"
            text="Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay."
            time="20/08/2020 6:00" 
          />
          <Cat 
            backgroundColor='#f1f8ff'
            title="Khách hàng được chia sẻ bị trùng"
            text="Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng."
            time="20/08/2020 6:00" 
          />
          <Cat 
            backgroundColor='#c5d5e5'
            title="Khách hàng được thêm bị trùng"
            text="Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng thêm khách hàng."
            time="20/08/2020 6:00"
          />
          <Cat 
            backgroundColor='#f1f8ff'
            title="Công việc sắp đến hạn trong hôm nay"
            text="Bạn có 17 công việc sắp hết hạn trong hôm nay."
            time="20/08/2020 6:00" 
          />
          <Cat 
            backgroundColor='#f1f8ff'
            title="Công việc đã quá hạn"
            text="Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc."
            time="20/08/2020 6:00" 
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 40,
      backgroundColor: '#eef',
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      
      width: 415,
      height: 100,
      justifyContent: 'center'
    },
});