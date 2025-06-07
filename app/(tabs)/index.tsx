import styles from "@/styles/dstyles";
import React from "react";
import { Image, Text, View } from "react-native";

export default function index() {
  return (
    <View style={[styles.container,{backgroundColor:"white"}]}>
      <Image
        source={require("../../assets/images/d_img/money-graphic-3d.jpg")}
        style={{ width: 320, height: 250, backgroundColor: "green" }}
      />

      <Text>index</Text>
    </View>
  );
}
