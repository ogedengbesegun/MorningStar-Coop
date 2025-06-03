import styles from "@/styles/dstyles";
import React from "react";
import { Image, Text, View } from "react-native";

export default function index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/adaptive-icon.png")}
        style={{ width: 150, height: 150 }}
      />

      <Text>index</Text>
    </View>
  );
}
