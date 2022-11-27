import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Button({ type, title, onPress }) {
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "black";

  return (
    <View style={styles.btnContainer}>
      <Pressable
        style={[styles.btnOrder, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.btnText, { textColor: textColor }]}>{title}</Text>
      </Pressable>
    </View>
  );
}
