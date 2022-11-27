import { View, FlatList, Dimensions } from "react-native";
import React from "react";
import data from "../../data";
import Car from "../Car";
import { styles } from "./styles";

export default function CarsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        snapToAlignment="start" // adds snap to center capability
        decelerationRate="fast" // adds snap to center capability
        snapToInterval={Dimensions.get("window").height} // adds snap to center capability
        showsVerticalScrollIndicator={false} // remove vertical scroll indicator
        renderItem={({ item }) => (
          <Car
            name={item.name}
            tagline={item.tagline}
            taglineCTA={item.taglineCTA}
            image={item.image}
          />
        )}
      />
    </View>
  );
}
