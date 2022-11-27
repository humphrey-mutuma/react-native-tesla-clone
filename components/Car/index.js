import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { styles } from "./styles";
import Button from "../Button";
export default function Car({ name, tagline, image, taglineCTA }) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} {""}
          <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.btnContainer}>
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
    </View>
  );
}
