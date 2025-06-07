import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../styles/dstyles";

export default function team() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/favicon.png")}
            style={{ width: 150, height: 150, marginBottom: 20, marginTop: 20 }}
          />
         
        </View>
      </ScrollView>
    </>
  );
}
