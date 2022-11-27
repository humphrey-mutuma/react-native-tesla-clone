import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Car from "./components/Car";

export default function App() {
  return (
    <View style={styles.container}>
      <Car
        name="Model X"
        tagline="Starting at $69000"
        image={require("./assets/images/ModelX.jpeg")}
      />
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
