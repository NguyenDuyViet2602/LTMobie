import React from 'react';
import { Text, View, StyleSheet } from 'react-native'; // Thêm StyleSheet vào đây
import PropTypes from 'prop-types';

const Cat = (props) => {
  return (
    <View>
      <Text style={styles.title}>{props.title} </Text>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.time}>{props.time}</Text>
    </View>
  );
}
// Định nghĩa kiểu dữ liệu cho các props
Cat.propTypes = {
    title: PropTypes.string.isRequired, // name phải là chuỗi và là bắt buộc
    text: PropTypes.string.isRequired,  // age phải là chuỗi và là bắt buộc
    time: PropTypes.string.isRequired,
};
const styles = StyleSheet.create({
    text: {
        marginTop: 5,
        fontSize: 16,
        marginLeft: 10,
        color: 'black',
      },
      time: {
        marginTop: 10,
        fontSize:15,
        marginLeft: 10,
        color: 'gray',
      }

});



export default Cat;