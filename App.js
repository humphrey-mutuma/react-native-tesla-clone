import { StatusBar } from "expo-status-bar";
import {  StyleSheet, Text, View } from "react-native";
import Car from "./components/Car";

export default function App() {
  return (
    <View style={styles.container}>
      <Car />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
