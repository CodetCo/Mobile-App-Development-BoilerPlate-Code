import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

const OrientationDemo = (props) => {
  const { landscape } = useDeviceOrientation();
  return (
    <View
      style={{
        flex: 0,
        width: "100%",
        height: landscape ? "100%" : "30%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
      }}
    ></View>
  );
};
export default OrientationDemo;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
});
