import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 50,
    zIndex: 100,
    justifyContent: "space-between",
     flex: 1,
    flexDirection: 'row',
    paddingHorizontal:20
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
