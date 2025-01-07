import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import TextBox from "./component/TextBox";

export default function App() {
  return (
    <View style={styles.container}>
      <TextBox
        backgroundColor={"blue"}
        content={"Hello world"}
        textColor={"#fff"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});