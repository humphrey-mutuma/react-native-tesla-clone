import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69 000</Text>
        </View>
      </View>
      <View style={styles.CTAbtn}>
        <Text style={styles.btnOrder}>Order Now</Text>
        <Text style={styles.btnDelivery}>Touchless Delivery</Text>
      </View>
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
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: { fontSize: 40, fontWeight: "500" },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  CTAbtn: {
    width: "100%",
    alignItems: "center",
    marginBottom: "30%",
  },
  btnOrder: {
    backgroundColor: "black",
    color: "white",
    fontSize: 20,
    padding: 10,
    borderRadius: 25,
    width: "75%",
    textAlign: "center",
  },
  btnDelivery: {
    marginTop: 5,
    backgroundColor: "sky",
    color: "black",
    fontSize: 20,
    padding: 10,
    borderRadius: 25,
    width: "75%",
    textAlign: "center",
  },
});
