import { Button, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import TextBox from "./TextBox";
import { setStatusBarBackgroundColor } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setStatusBarBackgroundColor(backgroundColor)}>
  <Text style={styles.buttonText}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    fontSize: 20,
  },

});