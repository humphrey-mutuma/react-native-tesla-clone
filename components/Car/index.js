import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { styles } from "./styles";
import Button from "../Button";
export default function Car() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69 000</Text>
      </View>
      <Button
        type="primary"
        title="Custom Order"
        onPress={() => console.warn("Custom Order was pressed")}
      />
      <Button
        type="secondary"
        title="Existing Inventory"
        onPress={() => console.warn("Inventory was pressed")}
      />
    </View>
  );
}
