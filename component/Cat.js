import React from 'react';
import { Text, View, StyleSheet } from 'react-native'; // Thêm StyleSheet vào đây
import PropTypes from 'prop-types';

const Cat = (props) => {
  return (
    <View>
      <Text style={styles.textLabel}>{props.title} </Text>
      <Text style={styles.text}>{props.content}</Text>
      <Text style={styles.date}>{props.date}</Text>
    </View>
  );
}
// Định nghĩa kiểu dữ liệu cho các props
Cat.propTypes = {
    title: PropTypes.string.isRequired, // name phải là chuỗi và là bắt buộc
  content: PropTypes.string.isRequired,  // age phải là chuỗi và là bắt buộc
  date: PropTypes.string.isRequired,
};
const styles = StyleSheet.create({
  textLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },

});



export default Cat;