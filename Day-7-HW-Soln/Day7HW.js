import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const Day7HW = (props) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.topBlueBox} />
    <View style={styles.middlePortion}>
      <View style={{ backgroundColor: "red", width: 100 }} />
      <View style={{ backgroundColor: "orange", width: 100 }} />
      <View style={{ backgroundColor: "green", width: 100 }} />
    </View>
    <View style={styles.bottomPortion}>
      <View style={{ backgroundColor: "gray", flex: 1 }} />
      <View style={{ flex: 1 }} />
    </View>
  </SafeAreaView>
);
export default Day7HW;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  topBlueBox: {
    flex: 2,
    backgroundColor: "blue",
  },
  middlePortion: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bottomPortion: {
    flex: 2,
    flexDirection: "column",
  },
});
