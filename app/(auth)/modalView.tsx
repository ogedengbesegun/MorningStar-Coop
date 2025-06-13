import React, { useRef, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../styles/dstyles"; // Adjust the path as necessary

export default function modalView() {
  const [visible, setVisible] = React.useState(false);

  return (
    <View>
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles2.overlay}>
          <View style={[styles2.dialog]}>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                color: "green",
                textDecorationLine: "underline",
              }}
            >
              Change your Password Instructions?
            </Text>
            <Text
              style={{
                // width: 350,
                textAlign: "center",
                color: "grey",
                marginRight: "auto",
                marginLeft: "auto",
                fontSize: 16,
              }}
            >
              Enter oracle Number + last Month Deduction without space e.g
              141516200000 Oracle Number is e.g 141516 and last Month Deduction
              is 200000 Note: No space, comma or any other character is allowed.
            </Text>
            <TextInput
              placeholder="Oracle Number with last Month Deduction"
              inputMode="numeric"
              style={[
                styles.input,
                { marginTop: 10, fontSize: 16, borderWidth: 0 },
              ]}
            ></TextInput>
            <TextInput
              placeholder="Enter New Password"
              secureTextEntry={true}
              style={styles.input}
            ></TextInput>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 10,
                gap: 10,
                width: 100,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => setVisible(false)}
              ></TouchableOpacity>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text></Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

//////
const styles2 = StyleSheet.create({
  container: { marginTop: 100, padding: 20 },

  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  dialog: {
    margin: 30,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
